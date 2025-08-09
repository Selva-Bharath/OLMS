import { FaArrowRight } from "react-icons/fa6";

const DemandCard = ({ Data }) => {
  return (
    <div className="grid grid-cols-4 gap-10 w-full my-16">
      {Data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-3 rounded-2xl space-y-5 w-5/6 border border-[#5555]"
        >
          <img
            src={`/src/assets/img/CLP${index}.png`}
            alt={`${item.title} Course`}
            className="rounded-xl border"
          />
          <h3 className="font-bold">{item.title}</h3>
          <div className="flex-1 flex flex-col justify-between space-y-2 text-[#1b2d45]">
            <p>{item.desc}</p>
            <p>{item.duration}</p>
          </div>
          <button className="b2 flex flex-row justify-center items-center space-x-3">
            <h2>Explore</h2> <FaArrowRight />
          </button>
        </div>
      ))}
    </div>
  );
};

export default DemandCard;
