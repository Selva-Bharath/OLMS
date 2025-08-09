import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [cont, setCont] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });
  const [issubject, setIsSubject] = useState(false);

  const sendMail = () => {
    if (!cont.name && !cont.email && !cont.subject && !cont.message)
      return toast.warning("Enter All Fields");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_OLMS,
        cont,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          toast.success("Email sent Successfully");
          console.log(res);
          setCont({
            name: "",
            email: "",
            subject: "General",
            message: "",
          });
        },
        (err) => {
          console.error("Email Send failed:", err);
          toast.error("Email failed to send");
        }
      );
  };
  return (
    <div className="w-full max-w-11/12 mx-auto space-y-5 my-16">
      <h1>Have Questions? We’re Here to Help.</h1>
      <h3>
        Whether you're a student, instructor, or institution — we’d love to hear
        from you.
      </h3>
      <div className="flex flex-row justify-evenly items-center my-16">
        <div className="flex flex-col space-y-10 w-1/4">
          <h1>
            Need help with a course, your account, or anything else? Let’s talk.
          </h1>
          <div className="text-[#00214d] flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h2>Email</h2>
              <p className="ml-10">Someone123@gmail.com</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2>Phone</h2>
              <p className="ml-10">+91 000-000-0000</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2>Location</h2>
              <p className="ml-10">
                No.XX,
                <br /> Street Name,
                <br /> State,
                <br /> Country.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 exc bg-white p-5 rounded-2xl border space-y-5">
          <div className="flex flex-col space-y-2">
            <h3>Name</h3>
            <input
              type="text"
              className="border rounded-lg p-2 w-full"
              placeholder="John Doe"
              value={cont.name}
              onChange={(e) => setCont({ ...cont, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h3>Email</h3>
            <input
              type="email"
              className="border rounded-lg p-2 w-full"
              placeholder="Someone123@gmail.com"
              value={cont.email}
              onChange={(e) => setCont({ ...cont, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h3>Subject</h3>
            <div className="relative border rounded-lg p-2 ">
              <div
                className="flex flex-row w-full justify-between items-center cursor-pointer"
                onClick={() => setIsSubject((prev) => !prev)}
              >
                <p>{cont.subject}</p> <RiArrowDropDownLine size={20} />
              </div>
              <div
                className={`w-full absolute top-0 left-0 border-2 ${
                  issubject || "hidden"
                }`}
              >
                {["General", "Student", "Instructor", "Business/Team"].map(
                  (item, index) => (
                    <p
                      key={index}
                      className="p-2 bg-white hover:bg-[#f5f5f5] cursor-pointer"
                      onClick={() => {
                        setCont({ ...cont, subject: item });
                        setIsSubject(false);
                      }}
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h3>Message</h3>
            <textarea
              rows={5}
              className="border rounded-lg p-2 w-full"
              placeholder="Message..."
              value={cont.message}
              onChange={(e) => setCont({ ...cont, message: e.target.value })}
            />
          </div>
          <button
            className="b2 w-full flex justify-center items-center space-x-3"
            onClick={sendMail}
          >
            <p>Send</p>
            <IoSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
