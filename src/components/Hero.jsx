import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-[50vh] lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-orange-300 via-green-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Markdown Previewer
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Preview your Markdown content in real-time and enhance your writing
            experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
            to={"/editor"}
              className="block w-full text-lg rounded border border-blue-600 bg-blue-600 px-12 py-3 font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
              href="#"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-lg font-medium text-white hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto no-underline"
              href="#features"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
