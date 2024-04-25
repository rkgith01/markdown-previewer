import { SiBuymeacoffee, SiGithub } from "react-icons/si";

const Header = () => {
  return (
    <header className="py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-2">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center no-underline"
        >
          <img src="/logo.png" className="h-14 w-14" alt="Flowbite Logo" />
        </a>
        <ul className="list-none flex space-x-4">
          <li>
            <a
              target="_blank"
              href="https://buymeacoffee.com/rajkapadiat"
              className="text-gray-200 hover:text-sky-600"
            >
              <SiBuymeacoffee size={30} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/rkgith01"
              className="text-gray-200 hover:text-sky-600"
            >
              <SiGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
