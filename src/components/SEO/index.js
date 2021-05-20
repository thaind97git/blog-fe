import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Alden Nguyen',
  description = 'Simply Resume and Blog by Alden Nguyen',
  imageHeader = 'https://avatars2.githubusercontent.com/u/42630357?s=460&v=4',
  url = 'https://aldenn.vercel.app',
}) => {
  return (
    <div>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={imageHeader} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageHeader} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageHeader} />
      </Helmet>
    </div>
  );
};

export default SEO;
