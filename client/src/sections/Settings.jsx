import { MdDone, MdEdit } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Settings = ({ user }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isedit, setIsedit] = useState("");

  const update = async () => {
    try {
      let updatedUser = user;
      if (newEmail) updatedUser.email = newEmail;
      if (newPassword) updatedUser.password = newPassword;

      const response = await axios.put(
        "http://localhost:3000/api/users/update",
        updatedUser
      );
      localStorage.setItem("user", response.data.user);
      toast.success("Update Saved");
      setIsedit("");
      setNewEmail("");
      setNewPassword("");
    } catch (error) {
      console.error("Update error", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something Went Wrong");
    }
  };

  const deleteUser = async () => {
    try {
      const isok = confirm("Are you sure you want to delete?");
      if (isok) {
        const response = await axios.delete(
          "http://localhost:3000/api/users/delete",
          { data: { user } }
        );
        console.log("User Deleted", response);
        toast.success("User Account Deleted");
        logout();
      }
    } catch (error) {
      console.error("Delete error", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something Went Wrong");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full p-10 w-full">
      <ToastContainer />
      <h1>Settings</h1>
      <div className="flex flex-row h-full p-2">
        <div className="w-1/2 border-r p-10 space-y-5 exc">
          <h2 className="text-lg text-[#00214d]">Account Security</h2>
          <div className="flex flex-row w-8/12">
            <h2 className="w-3/12">Email</h2>
            {isedit === "Email" ? (
              <div className="flex flex-row justify-between items-center w-10/12">
                <input
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  type="email"
                  placeholder="Someone123@gmail.com"
                  className="bg-white p-2 border w-10/12 rounded-lg"
                />
                <MdDone
                  className="border p-1 rounded-lg"
                  size={25}
                  onClick={update}
                />
              </div>
            ) : (
              <p className="p-2 bg-white border rounded-lg w-8/12 flex flex-row justify-between items-center">
                {user.email}{" "}
                <MdEdit
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setIsedit("Email")}
                />
              </p>
            )}
          </div>
          <div className="flex flex-row w-8/12">
            <h2 className="w-3/12">Password</h2>
            {isedit === "Password" ? (
              <div className="flex flex-row justify-between items-center w-10/12">
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="text"
                  placeholder="New Password"
                  className="bg-white p-2 border w-10/12 rounded-lg"
                />
                <MdDone
                  className="border p-1 rounded-lg"
                  size={25}
                  onClick={update}
                />
              </div>
            ) : (
              <p className="p-2 bg-white border rounded-lg w-8/12 flex flex-row justify-between items-center">
                **********{" "}
                <MdEdit
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setIsedit("Password")}
                />
              </p>
            )}
          </div>
          <div className="w-8/12 p-5 text-[#00214d] space-y-3 bg-white border rounded-lg mx-auto">
            <h2 className="text-lg">Multi-Factor Authentication</h2>
            <p className="text-justify">
              Increase your account security by requiring that a code emailed to
              you be entered when you log in. For more information on how
              multi-factor authentication works, refer to our Help Center
              article.
            </p>
            <button className="b2 flex mx-auto">Enable</button>
          </div>
          <div className="flex flex-col space-y-5 p-2">
            <h2 className="text-lg text-[#00214d]">Notification Preferences</h2>
            <div className="flex flex-col space-y-3 bg-white p-5 border rounded-xl w-8/12 mx-auto">
              <h2>Updates and Offers</h2>
              <div className="flex flex-row space-x-3">
                <input type="checkbox" defaultChecked />
                <p>Product launches and Anouncements</p>
              </div>
              <div className="flex flex-row space-x-3">
                <input type="checkbox" defaultChecked />
                <p>Offers and Promotions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <div className="flex flex-col space-y-3 bg-white p-5 border rounded-xl w-8/12 mx-auto">
            <h2>Your Learning</h2>
            <div className="flex flex-row space-x-3">
              <input type="checkbox" defaultChecked />
              <p>Course Starts</p>
            </div>
            <div className="flex flex-row space-x-3">
              <input type="checkbox" defaultChecked />
              <p>Course Completion</p>
            </div>
            <div className="flex flex-row space-x-3">
              <input type="checkbox" defaultChecked />
              <p>Notification from Instructor</p>
            </div>
            <div className="flex flex-row space-x-3">
              <input type="checkbox" defaultChecked />
              <p>Course Recommendation</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 p-5">
            <h2 className="text-lg text-[#00214d]">Delete Account</h2>
            <div className="flex flex-col bg-white p-5 rounded-xl border mx-auto w-8/12 space-y-5">
              <div className="flex flex-row space-x-2">
                <p className="text-red-600">Warning: </p>
                <p className="text-justify">
                  If you close your account, you will be unsubscribed from all 0
                  of your courses and will lose access to your account and data
                  associated with your account forever, even if you choose to
                  create a new account using the same email address in the
                  future.
                </p>
              </div>
              <button
                className="bg-red-500 mx-auto text-white w-4/12 p-2 rounded-lg cursor-pointer"
                onClick={deleteUser}
              >
                Delete
              </button>
            </div>
          </div>
          <button
            className="bg-white w-6/12 p-2 border rounded-lg mx-auto flex justify-evenly items-center hover:border-2 cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
