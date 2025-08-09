import { CiSearch } from "react-icons/ci";
import Logo from "../assets/img/logo.svg";
import {
  MdOutlineNotificationsNone,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isExplore = location.pathname === "/explore";
  const [showlinks, setShowlinks] = useState(false);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 left-0 z-10 flex flex-row justify-between items-center p-3 bg-[#FAFAFA] px-20 nav">
      <img
        src={Logo}
        alt=" OLMS Logo"
        onClick={() => navigate("/")}
        className="cursor-pointer mr-5"
      />
      {!isExplore ? (
        <div className="flex-1 flex flex-row justify-evenly items-center space-x-2 bg-white p-2 rounded-full w-xl border-2 border-[#00214d] mx-5">
          <CiSearch size={25} />
          <input
            type="text"
            placeholder="Search Courses"
            className="flex-1 p-1"
          />
        </div>
      ) : (
        <div className="flex-1"></div>
      )}
      <div className="flex flex-row space-x-3">
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/plan">Plans</Link>
        <Link to="/teach">Teach on OLMS</Link>
      </div>
      {!user ? (
        <div className="flex flex-row exc">
          <Link to="/login">
            <button className="b1">Log In </button>
          </Link>
          <Link to="/register">
            <button className="b2 border-2">Sign Up</button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row justify-evenly items-center space-x-5">
          <Link to="/">My Learning</Link>
          <div className="flex flex-row justify-evenly items-center exc">
            <Link to="/">
              <MdOutlineShoppingCart size={20} color="#00214d" />
            </Link>
            <Link to="/">
              <MdOutlineNotificationsNone size={20} color="#00214d" />
            </Link>
            <div
              className="relative flex flex-row justify-evenly items-center space-x-2"
              onMouseOver={() => setShowlinks(true)}
              onMouseLeave={() => setShowlinks(false)}
            >
              {user.profile?.avatar ? (
                <img
                  src={user.profile.avatar}
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full border p-1"
                  onClick={() => navigate("/dashboard")}
                />
              ) : (
                <FaRegUserCircle
                  size={30}
                  color="#00214d"
                  onClick={() => navigate("/dashboard")}
                />
              )}
              <p>{user.name.split(" ")[0]}</p>
              {showlinks && (
                <div className="absolute flex flex-col bg-[#f0f0f0] top-0 right-0 p-1 space-y-3 border rounded-lg">
                  <div className="flex flex-row justify-evenly items-center space-x-3 z-10 cursor-pointer">
                    <div>
                      {user.profile?.avatar ? (
                        <img
                          src={user.profile.avatar}
                          alt="User Profile"
                          width={40}
                          height={40}
                          className="rounded-full border p-1"
                          onClick={() => navigate("/dashboard")}
                        />
                      ) : (
                        <FaRegUserCircle
                          size={30}
                          color="#00214d"
                          onClick={() => navigate("/dashboard")}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="flex">{user.name}</h3>
                    </div>
                  </div>
                  <hr />
                  <Link to="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                  <hr />
                  <p
                    onClick={logout}
                    className="cursor-pointer text-center p-1"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
