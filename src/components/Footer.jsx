// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
          <a href="https://flowbite.com/" className="flex items-center no-underline font-bold  hover:font-semibold">
            <img
              src="/logo.png"
              className="h-12 w-auto"
              alt="Flowbite Logo"
            />
            <span className="ml-3 self-center text-2xl whitespace-nowrap dark:text-white ">
              Markdown Previewer
            </span>
          </a>
        </div>

        <p className="text-center">Made with ❤️ by Raj Kapadia</p>
  
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer