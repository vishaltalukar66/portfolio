import { useState } from "react";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [openPop, setOpenPop] = useState(false);

  const handlePopUp = () => {
    setOpenPop(() => !openPop);
  };
  const handleMobileNav = () => {
    setOpen(() => !open);
  };
  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-white ml-5 md:ml-0 font-mono font-semibold text-2xl">
            Vishal Talukar
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => {
                handleMobileNav();
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {open ? (
            <>
              <div
                className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:text-blue-700"
                      onClick={() => {
                        handleMobileNav();
                      }}
                    >
                      <i className="fa-solid fa-house " /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block py-2 px-3 hover:text-blue-700"
                      onClick={() => {
                        handleMobileNav();
                      }}
                    >
                      {" "}
                      <i className="fa-solid fa-diagram-project" /> Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="block py-2 px-3 hover:text-blue-700"
                      onClick={() => {
                        handleMobileNav();
                      }}
                    >
                      <i className="fa-solid fa-book" /> Experience
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => {
                        handleMobileNav();
                        handlePopUp();
                      }}
                      className="block py-2 px-3 hover:text-blue-700"
                    >
                      <i className="fa-solid fa-file" /> Resume
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  <li>
                    <a href="#" className="block py-2 px-3 hover:text-blue-700">
                      <i className="fa-solid fa-house " /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block py-2 px-3 hover:text-blue-700"
                    >
                      {" "}
                      <i className="fa-solid fa-diagram-project" /> Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="block py-2 px-3 hover:text-blue-700"
                    >
                      <i className="fa-solid fa-book" /> Experience
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => {
                        handlePopUp();
                      }}
                      className="block py-2 px-3 hover:text-blue-700"
                    >
                      <i className="fa-solid fa-file" /> Resume
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        {openPop && (
          <div
            id="ModelContainer"
            onClick={() => {
              handlePopUp();
            }}
            className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
          >
            <div className="p-2 bg-white w-10/12 md:w-1/3 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
              <div className="w-full p-3 justify-center items-center">
                <h2 className="font-semibold py-3 text-center text-lg">
                  By clicking 'Agree', you will be redirected to Google Drive to
                  access the PDF file.
                </h2>
              </div>
              <div className="flex w-full p-5 justify-between">
                <div>
                  <a target="_blank">
                    <button className="text-white rounded-md p-1 pl-3 pr-3 bg-red-500 hover:bg-red-400 flex h-full w-full items-center justify-center gap-2">
                      <i className="fa-solid fa-xmark" />
                      <div>I refuse</div>
                    </button>
                  </a>
                </div>
                <div>
                  <a target="_blank">
                    <button
                      className="text-white rounded-md p-1 pl-3 pr-3 bg-green-600 hover:bg-green-500 flex h-full w-full items-center justify-center gap-2"
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/drive/folders/1q9kKLh04f5-bE_Dwiyf5GR_p6BkQHAIY?usp=sharing"
                        );
                      }}
                    >
                      <i className="fa-solid fa-check" />
                      <div>I agree</div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
