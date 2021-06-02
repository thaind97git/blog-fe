import React from 'react';

const Tag = ({ tag }) => {
  const { title, blogCount = 3 } = tag || {};
  return (
    // <Link className="tag" to={`/tags/${slug}`}>
    <div className="tag">
      <div className="tag--title">{title}</div>
      <div className="tag--count">{blogCount}</div>
    </div>
    // </Link>
  );
};

export default Tag;
