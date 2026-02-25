export const Logos = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-4">
        <div className="hover:text-gray-700 text-black ">
          <a href="https://github.com/vishaltalukar66" target="_blank">
            <i className="fa-brands fa-square-github fa-2xl" />
          </a>
        </div>
        <div className="hover:text-gray-700 text-black ">
          <a href="https://www.linkedin.com/in/vishaltalukar/" target="_blank">
            <i className="fa-brands fa-linkedin fa-2xl" />
          </a>
        </div>
        <div className="hover:text-gray-700 text-black ">
          <a href="mailto:vishaltalukar1@outlook.com">
            <i className="fa-solid fa-envelope fa-2xl" />
          </a>
        </div>
      </div>
    </>
  );
};
