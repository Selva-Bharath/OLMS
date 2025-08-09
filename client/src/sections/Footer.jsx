import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#00214d] flex flex-row justify-evenly items-center p-10 text-white footer">
        <div className="flex flex-col justify-evenly items-center w-2/12 space-y-5">
          <img src={Logo} alt="Logo" className="invert w-3/12" />
          <h2>🎓 Learn at your pace. Succeed at your pace.</h2>
        </div>
        <div className="flex flex-row justify-evenly items-center w-8/12">
          <div className="space-y-5">
            <h4 className="text-lg mont">Explore</h4>
            <div className="flex flex-col space-y-3">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Browse Courses</Link>
              <Link to={"/"}>Career Tracks</Link>
              <Link to={"/"}>Popular Courses</Link>
              <Link to={"/"}>Pricing Plans</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="text-lg mont">Resourses</h4>
            <div className="flex flex-col space-y-3">
              <Link to={"/"}>Help Center</Link>
              <Link to={"/"}>FAQs</Link>
              <Link to={"/"}>Blog</Link>
              <Link to={"/"}>Become an Instructor</Link>
              <Link to={"/"}>Community Forum</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="text-lg mont">Legals</h4>
            <div className="flex flex-col space-y-3">
              <Link to={"/"}>Terms of Service</Link>
              <Link to={"/"}>Privacy Policy</Link>
              <Link to={"/"}>Refund Policy</Link>
              <Link to={"/"}>Cookie Policy</Link>
              <Link to={"/"}>Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-white mont">&#9400; 2025 OLMS. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
