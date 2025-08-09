import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = ({ user }) => {
  const info = [
    {
      title: "Name",
      value: user.name,
    },
    {
      title: "Email",
      value: user.email,
    },
    {
      title: "Joined on",
      value: user.date.split(" ")[1] + " " + user.date.split(" ")[3],
    },
    {
      title: "Role",
      value: user.role,
    },
  ];
  return (
    <div className="w-full flex flex-row h-full">
      <div className="w-1/3 border-r h-full border-[#00214d]">
        <div className="bg-[url('./src/assets/img/banner.jpg')] bg-center bg-cover bg-no-repeat w-full h-[150px] flex flex-row justify-around items-center p-5 space-x-5">
          <div className="bg-white p-2 rounded-full">
            {user.profile.avatar ? (
              <img
                src={user.profile.avatar}
                alt="User Profile"
                width={75}
                height={75}
                className="rounded-full border p-1"
              />
            ) : (
              <FaRegUserCircle size={75} color="#00214d" />
            )}
          </div>
          <div className="bg-[#ffffffc0] p-5 space-y-3 flex-1 rounded-xl">
            <h2 className="uppercase text-xl">{user.name}</h2>
            <p className="lowercase">{user.email}</p>
            <h2 className="uppercase">{user.role}</h2>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <div className="flex flex-col space-y-5">
            <h1>Information</h1>
            <div className="flex flex-col space-y-3 ">
              {info.map((item, index) => (
                <div
                  className="flex flex-row justify-between space-x-5"
                  key={index}
                >
                  <h3 className="w-4/12 flex justify-between">
                    {item.title} <span>:</span>
                  </h3>
                  <p className="w-10/12">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h1>Tags</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {[
                "UI/UX Designer",
                "Web Development",
                "Full Stack",
                "MERN Stack",
                "React",
                "Tailwind CSS",
                "Node JS",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-2 border-2 border-[#00214d] rounded-lg "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-10">
        <h1>Enrolled Courses</h1>
      </div>
    </div>
  );
};

export default Profile;
