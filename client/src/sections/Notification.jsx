import React, { useState } from "react";

const Notification = () => {
  const [details, setDetails] = useState(null);
  const noti = [
    {
      title: "Message 1",
      message: "Got a new Message from your tutor.",
    },
    {
      title: "Message 2",
      message: "Got a new Message from your tutor.",
    },
    {
      title: "Message 3",
      message: "Got a new Message from your tutor.",
    },
    {
      title: "Message 4",
      message: "Got a new Message from your tutor.",
    },
    {
      title: "Message 5",
      message: "Got a new Message from your tutor.",
    },
  ];
  return (
    <div className="flex flex-row p-10 h-full text-[#00214d]">
      <div className="w-4/12 border-r p-10 space-y-5">
        <h2 className="text-xl">Notification</h2>
        {noti.map((item, index) => (
          <div
            key={index}
            className="flex space-x-5 bg-white p-2 border rounded-xl cursor-pointer"
            onClick={() => setDetails(item)}
          >
            <img
              src="https://ik.imagekit.io/praveen005/Praveen.jpg?updatedAt=1752909658906"
              alt="Tutor image"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h2>{item.title}</h2>
              <p>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-8/12 p-10 space-y-10">
        {details && (
          <div className="bg-white p-5 rounded-xl flex flex-col h-full border space-y-10">
            <div className="flex flex-row space-x-10 p-2 border-b">
              <img
                src="https://ik.imagekit.io/praveen005/Praveen.jpg?updatedAt=1752909658906"
                alt="Tutor image"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="flex flex-col space-y-5">
                <h2 className="text-xl">Instructor Name</h2>
                <h3>Subject : {details.title}</h3>
              </div>
            </div>
            <p className="flex-1">{details.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
