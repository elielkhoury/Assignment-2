import tatternsImg from "/src/assets/tatterns.png";
import heaImg from "/src/assets/hea.png";
import bigImg from "/src/assets/big.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: tatternsImg,
      url: "https://tatterns.com",
    },
    {
      id: 2,
      src: heaImg,
      url: "https://hea.abiroot.dev",
    },
    {
      id: 3,
      src: bigImg,
      url: "https://bigsal.abiroot.dev",
    },
  ];

  return (
    <div name="projects" className="bg-[#202421] w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 ml-4">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
          <p className="py-6">Check out some of my work !</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-cyan-400 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400 hover:font-bold">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
