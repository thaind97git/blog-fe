import React from 'react';

const Skeleton = ({ type = 'normal' }) => {
  if (type === 'card') {
    return (
      <div className="loader">
        <div className="skeleton skeleton--card">
          <div className="skeleton--content">
            <div className="skeleton--content-wrapper">
              <div className="skeleton--content-wrapper fl">
                <div className="loader skeleton--circle"></div>
              </div>
              <div className="skeleton--content-wrapper fl">
                <div className="loader skeleton--title"></div>
                <div className="loader skeleton--line skeleton--line__short"></div>
              </div>
            </div>
            <div className="skeleton--content-wrapper">
              <div className="loader skeleton--line"></div>
              <div className="loader skeleton--line"></div>
              <div className="loader skeleton--line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'table') {
    return (
      <div className="loader">
        <div className="skeleton">
          <div className="skeleton--content">
            <div className="skeleton--content-wrapper">
              <div className="loader skeleton--title"></div>
              <div className="loader skeleton--hr"></div>
            </div>
            <div className="skeleton--content-wrapper skeleton--table">
              <div className="skeleton--tr">
                <div className="loader skeleton--th"></div>
                <div className="loader skeleton--th skeleton--td__3"></div>
                <div className="loader skeleton--th skeleton--td__2"></div>
                <div className="loader skeleton--th skeleton--td__5"></div>
                <div className="loader skeleton--th skeleton--td__4"></div>
              </div>
              <div className="skeleton--tr">
                <div className="loader skeleton--td"></div>
                <div className="loader skeleton--td skeleton--td__3"></div>
                <div className="loader skeleton--td skeleton--td__2"></div>
                <div className="loader skeleton--td skeleton--td__5"></div>
                <div className="loader skeleton--td skeleton--td__4"></div>
              </div>
              <div className="skeleton--tr">
                <div className="loader skeleton--td"></div>
                <div className="loader skeleton--td skeleton--td__3"></div>
                <div className="loader skeleton--td skeleton--td__2"></div>
                <div className="loader skeleton--td skeleton--td__5"></div>
                <div className="loader skeleton--td skeleton--td__4"></div>
              </div>
              <div className="skeleton--tr">
                <div className="loader skeleton--td"></div>
                <div className="loader skeleton--td skeleton--td__3"></div>
                <div className="loader skeleton--td skeleton--td__2"></div>
                <div className="loader skeleton--td skeleton--td__5"></div>
                <div className="loader skeleton--td skeleton--td__4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="loader">
      <div className="skeleton skeleton--card">
        <div className="skeleton--content">
          <div className="skeleton--content-wrapper">
            <div className="loader skeleton--title"></div>
            <div className="loader skeleton--hr"></div>
          </div>
          <div className="skeleton--content-wrapper">
            <div className="loader skeleton--line"></div>
            <div className="loader skeleton--line"></div>
            <div className="loader skeleton--line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
