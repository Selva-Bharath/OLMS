import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaUpload, FaUser } from "react-icons/fa6";
import {
  MdNotifications,
  MdSettings,
  MdSpaceDashboard,
  MdVideoLibrary,
} from "react-icons/md";
import DashboardSection from "../sections/DashboardSection";
import Profile from "./Profile";
import Notification from "../sections/Notification";
import Settings from "../sections/Settings";
import Upload from "../sections/Upload";
import Courses from "../sections/Courses";

const sections = [
  {
    title: "Dashboard",
    icon: <MdSpaceDashboard size={30} />,
    showon: ["admin", "tutor", "student"],
  },
  {
    title: "Profile",
    icon: <FaUser size={30} />,
    showon: ["admin", "tutor", "student"],
  },
  {
    title: "Instructors",
    icon: <FaUserTie size={30} />,
    showon: ["admin"],
  },
  {
    title: "Courses",
    icon: <MdVideoLibrary size={30} />,
    showon: ["admin", "tutor", "student"],
  },
  {
    title: "Upload",
    icon: <FaUpload size={30} />,
    showon: ["tutor"],
  },
  {
    title: "Notification",
    icon: <MdNotifications size={30} />,
    showon: ["admin", "tutor", "student"],
  },
  {
    title: "Settings",
    icon: <MdSettings size={30} />,
    showon: ["admin", "tutor", "student"],
  },
];

const Dashboard = () => {
  const [content, setContent] = useState("Dashboard");
  const user = JSON.parse(localStorage.getItem("user"));
  const [role, setRole] = useState(user.role);
  return (
    <div className="flex-1 flex flex-row w-full h-[590px]">
      <div className="absolute bottom-0 right-0">
        {["admin", "tutor", "student"].map((item, index) => (
          <button
            onClick={() => setRole(item)}
            key={index}
            className="mx-5 border p-2"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-[#e0e0e0] p-1 space-y-5 flex flex-col justify-evenly items-center border-r">
        {sections.map((item, index) => {
          if (item.showon.includes(role)) {
            return (
              <div
                className={`w-full flex flex-col justify-evenly items-center space-y-3 p-2 cursor-pointer hover:bg-white ${
                  content === item.title && "bg-white border text-[#0c71f4]"
                }`}
                key={index}
                onClick={() => setContent(item.title)}
              >
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex-1  h-[590px] overflow-y-auto">
        {content === "Dashboard" ? (
          <DashboardSection user={user} role={role} />
        ) : content === "Profile" ? (
          <Profile user={user} />
        ) : content === "Notification" ? (
          <Notification />
        ) : content === "Settings" ? (
          <Settings user={user} />
        ) : content === "Upload" ? (
          <Upload user={user} />
        ) : content === "Courses" ? (
          <Courses user={user} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dashboard;
