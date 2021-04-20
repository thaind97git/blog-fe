import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({ tag }) => {
  const { slug, title, blogCount = 3 } = tag || {};
  return (
    <Link className="tag" to={`/${slug}`}>
      <div className="tag--title">{title}</div>
      <div className="tag--count">{blogCount}</div>
    </Link>
  );
};

export default Tag;
