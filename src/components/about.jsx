import React from "react";
import ansh from "../assets/ansh.png";
import cartoon from "../assets/cartoon.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import sql from "../assets/sql.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import trophy from "../assets/trophy.png";


const About = () => {
  return (
    <div id="about" className="p-6 bg-[var(--custom-bg)] min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Row 1 */}

        <div className="md:col-span-2 flex flex-col p-6 bg-[#087EA4] text-white rounded-2xl shadow-md relative group">
          <h2 className="text-3xl font-bold mb-4">Full Stack Web Developer</h2>
          <p>
            Fluent in the art of Full Stack Web Development, adeptly utilizing
            tools like Node.js, React.js, NoSQL, SQL, HTML, CSS, and JavaScript.
            Proficiently crafting sophisticated solutions that seamlessly
            integrate both Frontend and Backend Web Development, resulting in a
            harmonious and impactful digital experience.
          </p>

          <div className="absolute right-0 bottom-0 h-[70px] sm:h-[110px] group-hover:scale-110 group-hover:m-4 transition-transform duration-300">
  <img
    src={cartoon}
    alt="cartoon"
    className="w-full h-full object-cover"
  />
</div>

        </div>

        <div className="flex flex-col justify-center px-6 rounded-2xl shadow-md bg-[radial-gradient(circle_at_center,#fff,#facc15)]">
          <img src={ansh} alt="Ansh" className=" h-[300px] rounded-xl " />
        </div>

        {/* Row 2 */}
        <div className="hover:rotate-5 flex flex-col p-6 bg-gray-200 rounded-2xl shadow-md relative group">
  <h2 className="text-xl font-bold mb-3">Current Role</h2>
  <p>
    I'm a Software Engineer at TCS, collaborating with talented teams to
    deliver high-quality software solutions. My IT background has prepared
    me to contribute effectively in a fast-paced environment.
  </p>

  <div className="w-[140px] h-[140px] mt-4 ml-auto group-hover:scale-110 transition-transform duration-300">
    <img
      src={trophy}
      alt="trophy"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        <div className="md:col-span-2 flex flex-col justify-center p-6 bg-green-300 rounded-2xl shadow-md">
  <h2 className="text-2xl font-bold">Tech Stack</h2>
  <div className="flex flex-wrap gap-4 mt-4">

    <img
      src={react}
      alt="Logo 2"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />

    <img
      src={mongo}
      alt="Logo 1"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />

    <img
      src={node}
      alt="Logo 3"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />
    <img
      src={sql}
      alt="Logo 4"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />
    <img
      src={cssLogo}
      alt="Logo 4"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />
    <img
      src={jsLogo}
      alt="Logo 4"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />
    <img
      src={htmlLogo}
      alt="Logo 4"
      className="w-24 h-24 object-contain hover:animate-bounce"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
