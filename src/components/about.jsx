import ansh from "../assets/ansh.png";
import anshwebp from "../assets/ansh.webp";
import anshavif from "../assets/ansh.avif";

import cartoon from "../assets/cartoon.png";
import cartoonwebp from "../assets/cartoon.webp";
import cartoonavif from "../assets/cartoon.avif";

import mongo from "../assets/mongo.png";
import mongowebp from "../assets/mongo.webp";
import mongoavif from "../assets/mongo.avif";

import react from "../assets/react.png";
import reactwebp from "../assets/react.webp";
import reactavif from "../assets/react.avif";

import node from "../assets/nodejs.png";
import nodewebp from "../assets/nodejs.webp";
import nodeavif from "../assets/nodejs.avif";

import sql from "../assets/sql.png";
import sqlwebp from "../assets/sql.webp";
import sqlavif from "../assets/sql.avif";

import htmlLogo from "../assets/html.png";
import htmlLogowebp from "../assets/html.webp";
import htmlLogoavif from "../assets/html.avif";

import cssLogo from "../assets/css.png";
import cssLogowebp from "../assets/css.webp";
import cssLogoavif from "../assets/css.avif";

import jsLogo from "../assets/javascript.png";
import jsLogowebp from "../assets/javascript.webp";
import jsLogoavif from "../assets/javascript.avif";

import trophy from "../assets/trophy.png";
import trophywebp from "../assets/trophy.webp";
import trophyavif from "../assets/trophy.avif";

const About = () => {
  return (
    <div
      id="about"
      className="p-6 bg-[var(--custom-bg)] min-h-screen flex justify-center items-center"
    >
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
            <picture>
              <source srcset={cartoonavif} type="image/avif" />
              <source srcset={cartoonwebp} type="image/webp" />
              <img
                src={cartoon}
                alt="cartoon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 rounded-2xl shadow-md bg-[radial-gradient(circle_at_center,#fff,#facc15)]">
          <picture>
              <source srcset={anshavif} type="image/avif" />
              <source srcset={anshwebp} type="image/webp" />
              <img
                src={ansh}
                alt="ansh"
                className=" h-[300px] rounded-xl "
                loading="lazy"
              />
            </picture>
        </div>

        {/* Row 2 */}
        <div className="hover:rotate-5 flex flex-col p-6 bg-gray-200 rounded-2xl shadow-md relative group">
          <h2 className="text-xl font-bold mb-3">Current Role</h2>
          <p>
            I'm a Software Engineer at TCS, collaborating with talented teams to
            deliver high-quality software solutions. My IT background has
            prepared me to contribute effectively in a fast-paced environment.
          </p>

          <div className="w-[140px] h-[140px] mt-4 ml-auto group-hover:scale-110 transition-transform duration-300">
            <picture>
              <source srcset={trophyavif} type="image/avif" />
              <source srcset={trophywebp} type="image/webp" />
              <img
                src={trophy}
                alt="trophy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center p-6 bg-green-300 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <picture>
              <source srcset={reactavif} type="image/avif" />
              <source srcset={reactwebp} type="image/webp" />
              <img
                src={react}
                alt="react logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>
      

            <picture>
              <source srcset={mongoavif} type="image/avif" />
              <source srcset={mongowebp} type="image/webp" />
              <img
                src={mongo}
                alt="mongoDB Logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>


          <picture>
              <source srcset={nodeavif} type="image/avif" />
              <source srcset={nodewebp} type="image/webp" />
              <img
                src={node}
                alt="NodeJS Logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>

            <picture>
              <source srcset={sqlavif} type="image/avif" />
              <source srcset={sqlwebp} type="image/webp" />
              <img
                src={sql}
                alt="SQL Logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>


             <picture>
              <source srcset={cssLogoavif} type="image/avif" />
              <source srcset={cssLogowebp} type="image/webp" />
              <img
                src={cssLogo}
                alt="CSS Logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>

             <picture>
              <source srcset={jsLogoavif} type="image/avif" />
              <source srcset={jsLogowebp} type="image/webp" />
              <img
                src={jsLogo}
                alt="JS Logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>

            <picture>
              <source srcset={htmlLogoavif} type="image/avif" />
              <source srcset={htmlLogowebp} type="image/webp" />
              <img
                src={htmlLogo}
                alt="HTML Logo"
                className="w-24 h-24 object-contain hover:animate-bounce"
                loading="lazy"
              />
            </picture>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
