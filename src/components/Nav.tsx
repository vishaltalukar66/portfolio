import { useState } from "react";

export const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="text-white ml-5 md:ml-0 font-mono font-semibold text-2xl">Vishal Talukar</div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <button

                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => { setOpen(!open) }}
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
                    {open ? (<><div
                        className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >

                        <ul className="flex text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 hover:text-blue-700"
                                >
                                    <i className="fa-solid fa-house " /> Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="block py-2 px-3 hover:text-blue-700"
                                > <i className="fa-solid fa-diagram-project" /> Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experience"
                                    className="block py-2 px-3 hover:text-blue-700"
                                ><i className="fa-solid fa-book" /> Experience
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1a2XggtnMvYGnSjhzzCaWPmWnpeGYHpv-?usp=sharing"
                                    className="block py-2 px-3 hover:text-blue-700"
                                ><i className="fa-solid fa-file" /> Resume
                                </a>
                            </li>

                        </ul>
                    </div></>) : (<><div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >

                        <ul className="flex text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 hover:text-blue-700"
                                >
                                    <i className="fa-solid fa-house " /> Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="block py-2 px-3 hover:text-blue-700"
                                > <i className="fa-solid fa-diagram-project" /> Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experience"
                                    className="block py-2 px-3 hover:text-blue-700"
                                ><i className="fa-solid fa-book" /> Experience
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1a2XggtnMvYGnSjhzzCaWPmWnpeGYHpv-?usp=sharing"
                                    className="block py-2 px-3 hover:text-blue-700"
                                ><i className="fa-solid fa-file" /> Resume
                                </a>
                            </li>

                        </ul>
                    </div></>)}

                </div>
            </nav>
        </>

    )
}