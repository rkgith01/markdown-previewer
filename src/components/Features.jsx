import { RiMarkdownFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="py-20" id="features">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row">
        <div>
          <RiMarkdownFill size={100} className="text-sky-600" />
        </div>
        <div className="flex flex-col items-center w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leading-none">
            Real-time Markdown Preview
          </h2>
          <p className="mt-4 mb-8 text-sm">
            Write Markdown on the left, and see the HTML preview on the right in real-time.
          </p>
          <Link to={"/editor"}>
          <button className="px-10 py-3 text-lg font-medium rounded-full bg-sky-600 text-gray-50 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600">
            Get started
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
