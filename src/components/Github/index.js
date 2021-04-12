import React from 'react';

const GitHub = () => {
  return (
    <div className="github-flair">
      <svg
        title="GitHub Flair"
        width="30"
        height="30"
        viewBox="0 0 250 250"
        style={{
          fill: '#eeeeee',
          color: '#24292e',
          position: 'absolute',
          top: 0,
          right: 0,
          border: 0,
        }}
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
        ></path>
      </svg>
      <div className="avatar">
        <a
          href="https://github.com/thaind97git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars2.githubusercontent.com/u/42630357?v=4"
            alt="Profile Avatar"
          />
        </a>
      </div>
      <div className="info">
        <div className="name">
          <a
            style={{ color: 'white' }}
            href="https://github.com/thaind97git"
            target="_blank"
            rel="noopener noreferrer"
          >
            thaind97git
          </a>
        </div>
        <div className="meta">
          <span title="Followers">
            <svg height="12" fill="#eeeeee" viewBox="0 0 16 16" width="12">
              <path
                fillRule="evenodd"
                d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"
              ></path>
            </svg>{' '}
            0&nbsp;&nbsp;
          </span>
          <span title="Total Public Repositories">
            <svg height="12" viewBox="0 0 12 16" width="12" fill="#eeeeee">
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>{' '}
            9&nbsp;&nbsp;
          </span>
          <span title="Total Public Gists">
            <svg height="12" viewBox="0 0 12 16" width="12" fill="#eeeeee">
              <path
                fillRule="evenodd"
                d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"
              ></path>
            </svg>{' '}
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
