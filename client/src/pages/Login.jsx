import axios from "axios";
import { useContext, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import emailjs from "@emailjs/browser";

const Login = () => {
  const navigate = useNavigate();
  const [showpass, setShowPass] = useState(false);
  const [cred, setCred] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [newotp, setNewOTP] = useState("");
  const { setUser } = useContext(AuthContext);

  const getOTP = async () => {
    let genotp = "";
    const response = await verifyUser();
    if (response.data.token) {
      for (let i = 0; i <= 5; i++) {
        genotp += Math.trunc(Math.random() * 9);
      }
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_OTP,
          {
            email: cred.email,
            otp: genotp,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (res) => {
            setNewOTP(genotp);
            toast.success("OTP sent Successfully");
            console.log(res);
          },
          (err) => {
            console.error("Send failed:", err);
            toast.error("OTP failed to send");
          }
        );
    }
  };

  const verifyUser = async () => {
    cred.email = cred.email.toLowerCase();
    try {
      if (!cred.email && !cred.password)
        return toast.warning("Fill all the fields");
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        cred
      );
      return response;
    } catch (error) {
      console.error("Login error", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something Went Wrong");
    }
  };

  const loginUser = async () => {
    try {
      console.log(newotp, cred.otp);
      if (newotp !== cred.otp) return toast.error("Entered OTP is Wrong");
      const response = await verifyUser();
      const token = response.data.token;
      localStorage.setItem("token", token);

      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      setUser(response.data.user);

      console.log("Login Successfull", response.data);
      toast.success("Login Successfull");

      setTimeout(() => {
        navigate("/explore");
      }, 1000);
    } catch (error) {
      console.error("Login error", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something Went Wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-[url('/src/assets/img/LS.png')] bg-center bg-cover bg-no-repeat flex flex-row justify-center items-center">
      <div
        className="text-white fixed top-5 left-5 flex fle-row justify-evenly items-center text-xl gap-2 rounded-full border p-3 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaChevronLeft /> Go Home
      </div>
      <ToastContainer />
      <div className="relative bg-black/95 w-7/12 h-6/12 p-10 text-[#00214d] rounded-3xl flex flex-row exc">
        <div className="w-1/2 h-full flex flex-col justify-center text-center items-center space-y-10 text-white">
          <h2 className="text-4xl w-2/3">Don't Have An Account?</h2>
          <h4 className="text-md w-2/3">
            Create your free account and unlock new skills.
          </h4>

          <Link to="/register">
            {" "}
            <button className="b2 w-full">Create One</button>
          </Link>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-evenly items-center relative">
          <div className="bg-[#dadada] w-4/5 rounded-3xl absolute">
            <h1 className="p-5">Login</h1>
            <div className="text-[#00214d] bg-[#fafafa] p-5 rounded-3xl space-y-4">
              <form
                className="exc  flex flex-col space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  loginUser();
                }}
              >
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    value={cred.email}
                    onChange={(e) =>
                      setCred({ ...cred, email: e.target.value })
                    }
                    required
                    type="email"
                    placeholder="Someone123@gmail.com"
                    id="email"
                    className="border border-[#00214d] bg-white p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <div className="flex justify-between items-center">
                    <input
                      value={cred.password}
                      onChange={(e) =>
                        setCred({ ...cred, password: e.target.value })
                      }
                      required
                      type={showpass ? "text" : "password"}
                      placeholder="Pass****"
                      id="password"
                      className="border border-[#00214d] bg-white p-2 rounded-lg w-10/12"
                    />
                    <p
                      onClick={() => setShowPass((prev) => !prev)}
                      className="border p-1 rounded-md hover:border-2 cursor-pointer"
                    >
                      {showpass ? (
                        <LuEye size={20} />
                      ) : (
                        <LuEyeClosed size={20} />
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="otp" className="font-bold">
                    OTP
                  </label>
                  <div className="flex space-x-2">
                    <input
                      value={cred.otp}
                      maxLength={6}
                      onChange={(e) =>
                        setCred({ ...cred, otp: e.target.value })
                      }
                      required
                      type="text"
                      placeholder="000000"
                      id="otp"
                      className="border border-[#00214d] bg-white p-2 rounded-lg tracking-wide"
                    />
                    <p
                      className="bg-[#f48c06] flex justify-center items-center text-white font-bold px-5 rounded-lg w-36 cursor-pointer"
                      onClick={getOTP}
                    >
                      Get OTP
                    </p>
                  </div>
                </div>
                <button className="b2">Login</button>
              </form>
              <button className="hover:font-bold cursor-pointer">
                Forgot Password?
              </button>
              <div className="flex flex-row justify-evenly items-center mt-5">
                <div className="flex flex-row justify-evenly items-center space-x-2 border p-2 rounded-lg hover:border-2">
                  <img
                    src="https://img.icons8.com/?size=20&id=17949&format=png&color=000000"
                    alt="Google"
                  />
                  <p className="mont">Google</p>
                </div>
                <div className="flex flex-row justify-evenly items-center space-x-2 border p-2 rounded-lg hover:border-2">
                  <img
                    src="https://img.icons8.com/?size=20&id=118497&format=png&color=000000"
                    alt="Facebook"
                  />
                  <p className="mont">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
