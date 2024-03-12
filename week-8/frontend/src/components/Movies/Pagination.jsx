import { useState } from "react";
import nextPage from "../../assets/next-page.svg";

const Pagination = ({ radius }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <nav className="w-[327px] md:w-full md:mt-6">
      <ul className=" flex justify-center">
        {[1, 2, 3, 4].map((pageNumber) => (
          <div
            key={pageNumber}
            type="button"
            className={`rounded-${radius} px-[15px] py-[8px] me-5 ${
              pageNumber === activePage
                ? "bg-blue text-white shadow-xl"
                : "bg-light-grey text-dark-grey"
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </div>
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
