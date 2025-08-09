import { useRef, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Image from "../components/Image";
import IKUploadComponent from "../components/IKUploadComponent";
import axios from "axios";

const Upload = ({ user }) => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "",
    tutorId: user.id,
    duration: 0,
    thumbnail: "",
    price: 0,
  });
  const uploadRef = useRef(null);
  const [imgURL, setImgURL] = useState(null);

  const uploadCourse = async () => {
    const newCourse = { ...course, thumbnail: imgURL };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/courses/add",
        newCourse
      );

      console.log(response);
    } catch (err) {
      console.log({ error: "Login Failed", details: err.message });
    }
  };

  return (
    <div className="w-full h-full p-10 flex flex-col">
      <h1>Upload a New Course</h1>
      <div className="flex flex-row h-full">
        <form className="w-1/3 border-r exc space-y-5 p-10">
          <div className="w-full flex flex-row">
            <label className="w-3/12" htmlFor="thumbnail">
              Thumbnail
            </label>
            <div
              id="thumbnail"
              className="relative w-52 h-48 bg-white border border-[#00214d] rounded-lg flex justify-center items-center cursor-pointer"
              onClick={() => uploadRef.current.click()}
            >
              <IKUploadComponent
                className="hidden"
                ref={uploadRef}
                setImgURL={setImgURL}
              />
              {imgURL ? (
                <Image
                  src={imgURL}
                  width={200}
                  height={100}
                  loading="lazy"
                  className="w-full h-full rounded-lg p-1"
                />
              ) : (
                <MdOutlineAddAPhoto size={25} color="#00214d" />
              )}
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="w-3/12" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              value={course.title}
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
              type="text"
              className="border p-2 border-[#00214d] rounded-lg"
            />
          </div>
          <div className="w-full flex flex-row">
            <label className="w-3/12" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
              type="text"
              className="border p-2 border-[#00214d] rounded-lg"
            />
          </div>
          <div className="w-full flex flex-row">
            <label className="w-3/12" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              value={course.category}
              onChange={(e) =>
                setCourse({ ...course, category: e.target.value })
              }
              type="text"
              className="border p-2 border-[#00214d] rounded-lg"
            />
          </div>
          <div className="w-full flex flex-row">
            <label className="w-3/12" htmlFor="duration">
              Duration
            </label>
            <input
              id="duration"
              value={course.duration}
              onChange={(e) =>
                setCourse({ ...course, duration: e.target.value })
              }
              type="text"
              className="border p-2 border-[#00214d] rounded-lg"
            />
          </div>
          <div className="w-full flex flex-row">
            <label className="w-3/12" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              value={course.price}
              onChange={(e) => setCourse({ ...course, price: e.target.value })}
              type="text"
              className="border p-2 border-[#00214d] rounded-lg"
            />
          </div>
          <button className="b2 flex mx-auto" onClick={uploadCourse}>
            Submit
          </button>
        </form>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Upload;
