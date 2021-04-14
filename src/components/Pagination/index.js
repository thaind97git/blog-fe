import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({
  onChange,
  totalCount,
  pageSize = 10,
  pageIndex: pageIndexProp = 0,
}) => {
  const [pageIndex, setPageIndex] = useState(pageIndexProp - 1);
  const totalPage = Math.ceil(totalCount / pageSize);
  if (totalPage <= 0) {
    return null;
  }
  return (
    <ReactPaginate
      previousLabel={'‹'}
      nextLabel={'›'}
      breakClassName={'break-me'}
      initialPage={pageIndex}
      pageCount={totalPage}
      onPageChange={({ selected }) => {
        setPageIndex(selected);
        typeof onChange === 'function' &&
          pageIndex !== selected &&
          onChange(selected + 1);
      }}
      containerClassName={'pagination-wrapper'}
      activeClassName="pagination-wrapper--active"
      pageClassName="pagination-wrapper--num"
      nextClassName={`pagination-wrapper--next ${
        pageIndex === totalPage && 'disabled'
      }`}
      previousClassName={`pagination-wrapper--previous ${
        pageIndex === 0 && 'disabled'
      }`}
    />
  );
};

export default Pagination;
