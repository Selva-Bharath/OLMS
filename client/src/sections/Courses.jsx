import axios from "axios";
import { useEffect, useState } from "react";
import Image from "../components/Image";
import { FaArrowRight, FaIndianRupeeSign, FaStar } from "react-icons/fa6";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const course = await axios.get("http://localhost:3000/api/courses/get");
        setCourses(course.data.courses);
      } catch (err) {
        console.log({ error: "Login Failed", details: err.message });
      }
    };
    getCourses();
  }, []);
  return (
    <div className="m-10">
      <h1>Courses</h1>
      <div className="h-[500px] grid grid-cols-4 gap-10 w-full p-5">
        {courses.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-3 rounded-2xl space-y-5 w-5/6 border border-[#5555]"
          >
            <Image src={item.thumbnail} className="w-full h-44" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <h2 className="text-xs">by {item.tutor}</h2>
            </div>
            <div className="flex-1 flex flex-col justify-between space-y-2">
              <p>{item.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-row space-x-5">
                  <p className="flex justify-evenly items-center">
                    <FaStar />
                    {item.rating}
                  </p>
                  <p>{item.duration} hours</p>
                </div>
                <p className="flex justify-evenly items-center">
                  <FaIndianRupeeSign />
                  {item.price}
                </p>
              </div>
            </div>
            <div className="flex font-bold justify-evenly items-center">
              <button className="bg-white border-2 border-[#f48c06] text-[#f48c06] rounded-md flex justify-evenly items-center space-x-2 p-2 px-5 cursor-pointer">
                <p>View</p> <FaArrowRight />
              </button>
              <button className="bg-[#f48c06] rounded-md text-white p-2 px-5 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
