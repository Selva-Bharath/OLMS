import { FaUserTie } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import {
  FaCheck,
  FaIndianRupeeSign,
  FaPause,
  FaPlay,
  FaUser,
} from "react-icons/fa6";

const admin = {
  cards: [
    {
      title: "Total Students",
      value: 0,
      icon: <FaUser />,
    },
    {
      title: "Total Instructors",
      value: 0,
      icon: <FaUserTie />,
    },
    {
      title: "Total Courses",
      value: 0,
      icon: <MdVideoLibrary />,
    },
    {
      title: "Revenue",
      value: 0,
      icon: <FaIndianRupeeSign />,
    },
  ],
};

const tutor = {
  cards: [
    {
      title: "My Courses",
      value: 0,
      icon: <MdVideoLibrary />,
    },
    {
      title: "Enrolled Students",
      value: 0,
      icon: <FaCheck />,
    },
    {
      title: "Course Views",
      value: 0,
      icon: <MdVideoLibrary />,
    },
    {
      title: "Earnings",
      value: 0,
      icon: <FaIndianRupeeSign />,
    },
  ],
};

const student = {
  cards: [
    {
      title: "Courses Enrolled",
      value: 0,
      icon: <MdVideoLibrary />,
    },
    {
      title: "Not Started",
      value: 0,
      icon: <FaPause />,
    },
    {
      title: "Started",
      value: 0,
      icon: <FaPlay />,
    },
    {
      title: "Completed",
      value: 0,
      icon: <FaCheck />,
    },
  ],
};

const DashboardSection = ({ user, role }) => {

  return (
    <div className="m-14 relative space-y-5">
      <h1>Hello {user.name}, Welcome Back</h1>
      <div className="flex flex-row justify-between space-x-10">
        <div className="flex flex-col justify-evenly h-full">
          {(role === "admin"
            ? admin
            : role === "tutor"
            ? tutor
            : student
          ).cards.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 flex flex-row justify-between items-center rounded-lg border-2 border-[#00214d] my-5"
            >
              <p className="text-4xl text-[#00214d]">{item.icon}</p>
              <div className="flex-1 flex flex-col justify-evenly items-center space-y-5">
                <h3>{item.title}</h3>
                <h1>{item.value}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-row">
          <div className="w-1/3 p-10">
            <h3>
              {role === "admin"
                ? "New Instructors"
                : role === "tutor"
                ? "My Courses"
                : "My Learning"}
            </h3>
          </div>
          <div className="w-1/3 border-x p-10">
            <h3>
              {role === "admin"
                ? "New Courses"
                : role === "tutor"
                ? "Student Enrolled"
                : "Recommended Courses"}
            </h3>
          </div>
          <div className="w-1/3 p-10">
            <h3>Trending Courses</h3>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardSection;
