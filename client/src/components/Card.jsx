import { FaArrowRight, FaIndianRupeeSign, FaStar } from "react-icons/fa6";

const DemandCard = ({ Data }) => {
  return (
    <div className="grid grid-cols-4 gap-10 w-full my-16">
      {Data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-3 rounded-2xl space-y-5 w-5/6 border border-[#5555]"
        >
          <img
            src={`/src/assets/img/Course${index + 1}.png`}
            alt={`${item.title} Course`}
            className="rounded-xl border"
          />
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <h2 className="text-xs">by {item.tutor}</h2>
          </div>
          <div className="flex-1 flex flex-col justify-between space-y-2">
            <p>{item.desc}</p>
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
            <button className="bg-[#f48c06] rounded-md text-white p-2 px-5 cursor-pointer">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemandCard;
