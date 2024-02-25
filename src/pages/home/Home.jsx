import MyImg from "/src/assets/Profile.png";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-[#202421] min-h-screen w-full flex items-center"
    >
      <div className="px-4 py-8 mx-auto flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-screen-lg">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-14">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base lg:text-lg max-w-md">
            I have 3 years of experience in HTML, CSS, Bootstrap, media queries,
            Javascript, React, and Wordpress, dedicated to building responsive
            and interactive websites.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1GZifDOt1qgFy9UFIaBko8TPzh9C2Tk93"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            <button className="group text-cyan-400 outline outline-offset-2 outline-cyan-400 w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:text-[#202421] hover:bg-cyan-400 hover:font-bold hover:outline-none">
              Download CV <IoMdDownload className="ml-2" />
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={MyImg}
            alt="my profile"
            className="rounded-2xl shadow-xl max-w-xs md:max-w-sm lg:max-w-md"
          />
          <a
            href="https://www.linkedin.com/in/elie-georgio-el-khoury/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <FaLinkedinIn className="text-4xl text-cyan-400 hover:text-cyan-500 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
