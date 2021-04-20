import { getTags } from '@/apis/tag';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import Tag from './components/Tag';

const Tags = () => {
  const { data: tags, fetching: fetchingTags } = useGetRequest({
    promiseFunction: getTags,
  });

  if (fetchingTags) {
    return 'Fetching...';
  }
  return (
    <div className="list-of-tag">
      {tags.results.map((tag, index) => (
        <Tag key={tag.id || index} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
