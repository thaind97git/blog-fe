import React from 'react';
import { getTags } from '@/apis/tag';
import useGetRequest from '@/hooks/useGetRequest';
import Tag from './components/Tag';

import { ensureArray } from '@/utils';

const Tags = () => {
  const { data: tags, fetching: fetchingTags } = useGetRequest({
    promiseFunction: getTags,
  });

  if (fetchingTags) {
    return 'Fetching...';
  }
  return (
    <div className="list-of-tag">
      {fetchingTags ? (
        <span>Fetching...</span>
      ) : (
        ensureArray(tags?.results).map((tag, index) => (
          <Tag key={tag.id || index} tag={tag} />
        ))
      )}
    </div>
  );
};

export default Tags;
