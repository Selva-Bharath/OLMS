import { Link } from "react-router-dom";
import About0 from "../assets/img/About0.png";
import About1 from "../assets/img/About1.png";
import Contact from "../sections/Contact";

const About = () => {
  return (
    <div className="w-full max-w-11/12 mx-auto space-y-5 my-16">
      <h1>Empowering Learns, Enabling Futures.</h1>
      <h3>
        We're building the bridge between curiosity and career- one course at a
        time.
      </h3>
      <div className="flex flex-row justify-evenly">
        <img src={About0} alt="About section" className="w-5/12" />
        <div className="w-5/12 text-justify flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1>Who We Are</h1>
            <p className="text-[#1b2d45]">
              We're an online learning platform designed to make education
              flexible,accessible and impactful. Wheather your're a student
              exploring new skills, a professional upskiling for your career, or
              an instructor eager to teach - we've built the tools to help you
              succeed.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h1>What We Do</h1>
            <p className="text-[#1b2d45]">
              we provide a wide range of high-quality course across technology,
              business, marketing, AI, Data Science, and more. Our platform
              enables:
            </p>
            <div>
              <ul className="ml-15 list-disc flex flex-col space-y-2 text-[#1b2d45]">
                <li>Student to learn at their own page </li>
                <li>Instructors to share their knowledge</li>
                <li>Institution to mange training and growth efficiently</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h1>Why We Do</h1>
            <p className="text-[#1b2d45]">
              We believe learning is a lifelong journey. Our goal is to remove
              barrier and create an environment where anyone, anywhere can
              learn,grow,and achieve thier goals
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center my-10">
        {[
          "🎓 10,000+ learners",
          "🌍 25+ Countries",
          "🧑‍🏫 300+ Expert Instructors",
          "🏆 500+ Career Certificate Issued",
        ].map((item, index) => (
          <p key={index} className="border p-3 rounded-xl bg-white">
            {item}
          </p>
        ))}
      </div>
      <h1 className="text-center my-16">
        Ready to be part of our learning revolution ?
      </h1>
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col space-y-20">
          <button className="b2"><Link to="/explore">Explore Courses</Link></button>
          <button className="b1"><Link to="/teach">Become an Instructor</Link></button>
        </div>
        <img src={About1} alt="About Section" />
      </div>
      <Contact />
    </div>
  );
};

export default About;
