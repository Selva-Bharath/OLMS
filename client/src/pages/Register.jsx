import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [showpass, setShowPass] = useState(false);
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    role: role,
    profileImg: "",
  });

  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
      setCred({ ...cred, role: location.state.role });
    }
  }, [location.state]);

  const registerUser = async () => {
    cred.email = cred.email.toLowerCase();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        cred
      );
      console.log("Registered successfully: ", response.data);
      toast.success("Registered Successfully!");
      setCred({
        name: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(
        "Registration error",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || "Registration failed");
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
      <div className="relative bg-black/95 w-7/12 h-6/12 p-10 text-[#00214d] rounded-3xl flex flex-row">
        <ToastContainer />
        <div className="w-1/2 h-full flex flex-col justify-evenly items-center relative">
          <div className="bg-[#dadada] w-4/5 rounded-3xl absolute">
            <h1 className="p-5">Sign Up</h1>
            <div className="text-[#00214d] bg-[#fafafa] p-5 rounded-3xl space-y-4">
              <form
                className="exc  flex flex-col space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
              >
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <input
                    value={cred.name}
                    onChange={(e) => setCred({ ...cred, name: e.target.value })}
                    required
                    type="text"
                    placeholder="John Doe"
                    id="name"
                    className="border border-[#00214d] bg-white p-2 rounded-lg"
                  />
                </div>
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
                <input type="hidden" value={role} name="role" />
                <p>
                  You are registering as: <strong>{role}</strong>
                </p>
                <button className="b2" type="submit">
                  Register
                </button>
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
        <div className="w-1/2 h-full flex flex-col justify-center text-center items-center space-y-10 text-white exc">
          <h2 className="text-4xl">Already Have An Account?</h2>
          <h4 className="text-md">Log in to pick up where you left.</h4>

          <Link to="/login">
            {" "}
            <button className="b2 w-full">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
