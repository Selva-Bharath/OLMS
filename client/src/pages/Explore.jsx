import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCircleChevronRight, FaFilter, FaSort } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import Data from "../Data";
import DemandCard from "../components/DemandCard";
import Card from "../components/Card";
import PlanCard from "../components/PlanCard";
import { Link } from "react-router-dom";
import Contact from "../sections/Contact";
import LData from "../LData";

const Explore = () => {
  const [sorttype, setSorttype] = useState("Most Relevant");
  const [showtype, setShowType] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      <div className="flex flex-row justify-center items-center my-16 w-full space-x-5">
        <div className="flex flex-row justify-evenly items-center w-6/12 space-x-2 bg-white p-2 rounded-full border-2 border-[#00214d]">
          <CiSearch size={25} />
          <input
            type="text"
            placeholder="Search Courses"
            className="flex-1 p-1"
          />
        </div>
        <div className="flex flex-row space-x-5 text-[#00214d]">
          <div className="flex flex-row justify-evenly items-center space-x-3 border-2 border-[#00214d] p-2 rounded-xl cursor-pointer">
            <FaSort size={15} /> <p>Sort</p>
          </div>
          <div className="flex flex-row justify-evenly items-center space-x-3 border-2 border-[#00214d] p-2 rounded-xl cursor-pointer">
            <FaFilter size={15} /> <p>Filter</p>
          </div>
          <button className="border-2 border-[#00214d] p-2 rounded-xl cursor-pointer">
            Free Courses
          </button>
          <button
            className="flex flex-row justify-evenly items-center space-x-3 border-2 border-[#00214d] p-2 rounded-xl cursor-pointer relative"
            onClick={() => setShowType((prev) => !prev)}
          >
            {sorttype} <RiArrowDropDownLine size={20} />
            <div
              className={`absolute bg-white top-0 left-0 w-full border-2 border-[#00214d] rounded-xl ${
                showtype || "hidden"
              }`}
            >
              {["Most Relevant", "Popular", "Newest"].map((item, index) => (
                <h3
                  key={index}
                  className="p-2 border"
                  onClick={() => {
                    setSorttype(item);
                  }}
                >
                  {item}
                </h3>
              ))}
            </div>
          </button>
        </div>
      </div>
      {/* ------------------------------- Demand Courses ------------------------ */}
      <div className="w-full max-w-11/12 mx-auto space-y-5">
        <h1>Launch your dream career with curated learning paths.</h1>
        <h3>
          Popular career-focused tracks to help you stand out in today’s job
          market.
        </h3>
        <DemandCard Data={LData.CLP} />
      </div>
      {/* ------------------------------- Courses ------------------------ */}
      <div className="w-full max-w-11/12 mx-auto space-y-5">
        <h1>Learn In-Demand Skills. Anytime. Anywhere.</h1>
        <h3>Explore trending courses and start building your tomorrow.</h3>
        <Card Data={Data.Courses} />
        <Card Data={Data.Courses} />
      </div>
      {/* ------------------------------- Category ------------------------ */}
      <div className="w-full max-w-11/12 mx-auto my-16 space-y-10">
        <h1>Explore by Categories</h1>
        <div className="flex flex-row justify-evenly items-center">
          {[
            "Design",
            "Game Development",
            "Data Science",
            "Business",
            "Marketing",
            "Photography",
            "Videography",
            "Cybersecurity",
          ].map((item, index) => (
            <div key={index} className="flex flex-col space-y-3 cursor-pointer">
              <img
                src={`/src/assets/img/category/C${index}.svg`}
                alt={item}
                className="border-2 p-2 border-[#00214d] rounded-xl mx-auto"
              />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------- Divider ------------------------ */}
      <div className="w-full mx-auto my-16 space-y-10 bg-[#00214d] text-white p-10 rounded-3xl">
        <h2 className="text-center text-2xl">
          Online coaching lessons for remote learning.
        </h2>
        <div className="flex flex-row justify-evenly items-center p-10">
          <p className="w-1/3 text-justify">
            Online coaching lessons support remote learning through live
            sessions, recorded videos, and interactive quizzes. Gamified content
            boosts engagement, while one-on-one coaching offers personalized
            support. Discussion forums and downloadable materials enhance
            learning. Virtual labs and AI-based lessons provide hands-on and
            adaptive experiences, making education flexible, effective, and
            accessible for all learners.
          </p>
          <button className="b1">Start Learning now</button>
        </div>
      </div>
      {/* ------------------------------- Divider2 ------------------------ */}
      <div className="w-full mx-auto my-16 bg-[#0080b7]/60 text-white p-10 grid grid-cols-6 gap-5 justify-between items-center">
        {[
          "Python",
          "Java",
          "C++",
          "Ruby",
          "PHP",
          "Golang",
          "Haskel",
          "Digital Marketing",
          "Email Marketing",
          "Photograaphy Courses",
          "Videography Courses",
          "Scala",
          "Network Security",
          "Cyber Security",
          "Informational Security",
          "Cloud Security",
          "Lisp",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "MongoDB",
          "Express",
          "Node JS",
        ].map((item, index) => (
          <h3
            key={index}
            className="p-2 px-3 rounded-xl text-center cursor-pointer bg-white border"
          >
            {item}
          </h3>
        ))}
      </div>
      {/* ------------------------------- Divider2 ------------------------ */}
      <div className="w-full max-w-11/12 mx-auto my-16 space-y-10">
        <h1>Recommended For You</h1>
        <Card Data={Data.Courses} />
      </div>
      {/* ------------------------------- Plans ------------------------ */}
      <div className="w-full max-w-11/12 mx-auto space-y-5">
        <h1>Choose a plan that fits your learning style</h1>
        <h3>
          Upgrade your skills with flexible, affordable plans — start free or
          unlock everything with premium access.
        </h3>
        <div className="flex justify-evenly items-center exc">
          <PlanCard Data={LData.Plans} />
          <Link
            to="/plan"
            className="text-[#f48c06] hover:bg-transparent flex flex-col justify-center items-center space-y-5 p-3 hover:text-[#fea735] cursor-pointer"
          >
            <FaCircleChevronRight size={40} /> <p>Explore Yearly Plans</p>
          </Link>
        </div>
      </div>
      {/* ------------------------------- Contact ------------------------ */}
      <Contact />
    </div>
  );
};

export default Explore;
