import { useState } from "react";
import nextPage from "../../assets/next-page.svg"

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <nav className="w-full mt-6">
      <ul className=" flex justify-center">
        {[1, 2, 3, 4].map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            className={`rounded-full px-[16px] py-[10px] me-5 ${
              pageNumber === activePage
                ? "bg-blue text-white"
                : "bg-light-grey text-dark-grey"
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <img
          src={nextPage}
          alt="next page"
          onClick={() => handlePageClick(activePage + 1)}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
