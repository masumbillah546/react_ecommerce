import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
            <div className="store-filter clearfix">
              <span className="store-qty">Showing 20-100 products</span>
              <ul className="store-pagination">
                 {pageNumbers.map(number => (
                <li className={number==currentPage ? "active" : ""} key={number}>
                {number==currentPage?number:
                    <a  onClick={() => paginate(number)} >{number}</a>
                  }
                </li>
                 ))}
              </ul>
            </div>
  );
};

export default Pagination;
