import { htmlDecode } from '@/helpers/html';
import React, { Fragment } from 'react';

import { ensureArray } from '@/utils';

const Content = ({ resume }) => {
  if (!resume) {
    return null;
  }

  return (
    <>
      {resume.title ? (
        <h2 className="resume--section--right--title">{resume.title}</h2>
      ) : null}
      {resume.subTitle ? (
        <span className="resume--section--right--sub-title">
          {resume.subTitle}
        </span>
      ) : null}
      {resume.dateRange ? (
        <span className="resume--section--right--sub-title">
          {resume.dateRange}
        </span>
      ) : null}
      {resume.html ? (
        <div
          dangerouslySetInnerHTML={{
            __html: htmlDecode(resume.html),
          }}
        />
      ) : null}
    </>
  );
};

const Skills = ({ resume }) => {
  return (
    <ul className="resume--section--right--skill">
      {ensureArray(resume.skills).map(skill => (
        <li className="resume--section--right--skill--item" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

const RightContent = ({ resume }) => {
  if (!resume) {
    return null;
  }
  return (
    <>
      <hr />
      {ensureArray(resume.skills).length ? (
        <Skills resume={resume} />
      ) : (
        <Content resume={resume} />
      )}
      {ensureArray(resume.subSections).map(resume => (
        <Fragment key={resume.id}>
          {ensureArray(resume.skills).length ? (
            <Skills resume={resume} />
          ) : (
            <Content resume={resume} />
          )}
        </Fragment>
      ))}
    </>
  );
};

export default RightContent;
