import useMarkdown from '@/hooks/useMarkdown';
import React from 'react';

const BlogDetails = () => {
  const { markdown } = useMarkdown({ path: '/mock/post1.md' });

  return (
    <div className="blog-details">
      {markdown && <div dangerouslySetInnerHTML={{ __html: markdown }} />}
    </div>
  );
};

export default BlogDetails;
