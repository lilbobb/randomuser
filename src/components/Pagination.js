import React from "react";
import "./paginate.css";

const Pagination = ({ single, total, paginate }) => {
  const numOfPages = [];

  for (let i = 1; i <= Math.ceil(total / single); i++) {
    numOfPages.push(i);
  }

  return (
    <nav>
      <div className="paginate">
        {numOfPages.map((pageOne) => (
          <button
            onClick={() => paginate(pageOne)}
            key={pageOne}
            className="one"
          >
            {pageOne}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
