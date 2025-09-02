import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='hero' className="bg-[var(--custom-bg)] dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-2 py-8 mx-auto lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-4xl font-sans  leading-tight tracking-tight mb-4 md:text-5xl xl:text-6xl dark:text-white">
           Hey there, I'm  <span className="font-sans bg-gradient-to-r from-[var(--custom-head-text)] via-[var(--custom-head-text)] to-[var(--custom-head-text)] h-32 w-full text-transparent bg-clip-text font-extrabold">
  Ansh Dube
</span>
          </p>

          <p className="text-4xl font-sans leading-tight tracking-tight mb-12 md:text-5xl xl:text-5xl dark:text-white">
           A Software Engineer. {String.fromCodePoint(0x1F44B)}
          </p>
          
          <div className="flex flex-wrap gap-4">
  <Link
    to="/resume"
    className="px-5 py-3 text-white bg-[var(--custom-red-btn)] hover:bg-[var(--custom-red-btn-hover)] focus:ring-4 focus:ring-[var(--custom-red-btn-hover)] font-medium rounded-lg text-base flex items-center"
  >
    Resume
    <svg
      className="w-5 h-5 ml-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </Link>
  <Link
    to="mailto:anshdube10801@gmail.com"
    className="px-5 py-3 text-[var(--custom-red-btn-hover)] border border-[var(--custom-red-btn-hover)] hover:bg-[var(--custom-red-sec-btn-hover)] focus:ring-4 focus:ring-[var(--custom-red-btn-hover)] font-medium rounded-lg text-base dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
  >
    Hire Me
  </Link>
</div>

        </div>
        <div className="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
          <picture>
  <source srcSet="/hero.avif" type="image/avif" />
  <source srcSet="/hero.webp" type="image/webp" />
  <img 
    src="/hero.png" 
    alt="mockup" 
    className="w-full max-w-md" 
    fetchpriority="high"
  />
</picture>

        </div>
      </div>
    </section>
  );
};

export default Hero;
