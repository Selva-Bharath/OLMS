import { Link } from "react-router-dom";

const cont = [
  {
    title: "Create an Engaging Course",
    para: "Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.",
  },
  {
    title: "Get Started with Video",
    para: "Quality video lectures can set your course apart. Use our resources to learn the basics.",
  },
  {
    title: "Build Your Audience",
    para: "Set your course up for success by building your audience. Use our resources to learn the basics.",
  },
  {
    title: "Join the New Instructor Challenge!",
    para: "Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!",
  },
];

const CourseCreation = () => {
  return (
    <div className="w-full max-w-11/12 mx-auto space-y-5 my-16 exc">
      <h1>Teach on OLMS. Become an Instructor.</h1>
      <h3>
        Based on your experience, we think these resources will be helpful.
      </h3>
      <div className="grid grid-cols-2 gap-20 ">
        {cont.map((item, index) => (
          <div
            key={index}
            className="border-2 p-3 rounded-2xl flex flex-row space-x-10 border-[#00214d]"
          >
            <img src={`/src/assets/img/teach/T${index}.png`} alt={item.title} />
            <div className="flex flex-col space-y-3 text-justify">
              <h2 className="text-[#00214d] text-xl">{item.title}</h2>
              <p className="text-[#1b2d45] flex-1">{item.para}</p>
              <Link to="/register" state={{ role: "tutor" }}>
                <button className="b2 flex mx-auto">Get Started</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center mt-16">
        Have questions? Here are our most popular instructor resources.
      </h3>
      <h1 className="text-center">Are you ready to begin?</h1>
      <Link to="/register" state={{ role: "tutor" }}>
        <button className="b2 flex mx-auto my-10">Make Courses</button>
      </Link>
    </div>
  );
};

export default CourseCreation;
