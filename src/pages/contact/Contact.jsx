import enveloppeImg from "/Users/elieelkhoury/Desktop/Eurisko/my-portfolio/src/assets/env.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#202421] text-white flex items-center"
    >
      <div className="px-4 py-8 mx-auto flex flex-col justify-center w-full max-w-screen-lg">
        <div className="mb-8 mt-20">
          <p className="text-3xl sm:text-4xl font-bold">
            <span className="border-b-4 border-gray-500">Contact Me</span>
          </p>
          <p className="mt-4 text-lg sm:text-xl">Get In Touch With Me</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <form
            action="https://getform.io/f/qaQYZMan"
            method="POST"
            className="flex flex-col w-full sm:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <div className="flex items-center justify-start mt-4">
              <button className="text-cyan-400 border border-cyan-400 px-6 py-3 flex items-center rounded-md hover:bg-cyan-400 hover:text-[#202421] hover:font-bold transition duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </form>

          <div className="flex justify-center sm:w-1/2">
            <img
              src={enveloppeImg}
              alt="Contact Me"
              className="rounded-md hover:scale-105 transition duration-200 max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
