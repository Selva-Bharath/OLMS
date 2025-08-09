import Hero from "../assets/img/hero.png";
import DemandCard from "../components/DemandCard";
import Card from "../components/Card";
import Data from "../Data";
import PlanCard from "../components/PlanCard";
import Contact from "../sections/Contact";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LData from "../LData";

const Landing = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* ------------------------------- Hero ------------------------ */}
      <div className="bg-[url(/src/assets/img/HeroWaves.svg)] bg-cover bg-no-repeat w-full min-h-screen flex flex-row justify-evenly items-center text-white">
        <div className="flex flex-col w-5/12 justify-evenly items-center space-y-10">
          <h2 className="text-2xl w-2/6">
            <span className="text-7xl">LEARN</span>
            <br /> Anywhere, Anytime with Our OLMS Platform
          </h2>
          <p className="w-3/6 text-center">
            Empowering students and instructors with seamless online learning,
            progress tracking, and certification.
          </p>
          <div className="flex space-x-10 exc">
            <Link to="/explore"><button className="b1">Browse Course</button></Link>
            <Link to="/register"><button className="b2">Join Now</button></Link>
          </div>
        </div>
        <img src={Hero} alt="Hero" className="w-2/6" />
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
          <Link to="/plan" className="text-[#f48c06] hover:bg-transparent flex flex-col justify-center items-center space-y-5 p-3 hover:text-[#fea735] cursor-pointer">
            <FaCircleChevronRight size={40} /> <p>Explore Yearly Plans</p>
          </Link>
        </div>
      </div>
      {/* ------------------------------- Contact ------------------------ */}
      <Contact />
    </div>
  );
};

export default Landing;
