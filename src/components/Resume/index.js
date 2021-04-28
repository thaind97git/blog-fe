import React from 'react';
import { ensureArray } from '@/utils';
import RightContent from './RightContent';

const Resume = ({
  profile = {
    name: 'Thai Nguyen',
    email: 'thaind97.dev@gmail.com',
    phone: '0934496440',
    address: '41 - 30 Street, District Thu Duc',
  },
  sections = [],
}) => {
  return (
    <div className="resume">
      <div className="resume--header">
        <div className="resume--header--left">{profile.name}</div>
        <div className="resume--header--right">
          <span>{profile.email}</span>
          <br />
          <span>{profile.phone}</span>
          <br />
          <span>{profile.address}</span>
        </div>
      </div>
      {ensureArray(sections).map(section => {
        return (
          <section key={section.id} className="resume--section">
            <div className="resume--section--left">{section.sectionTitle}</div>
            <div className="resume--section--right">
              <RightContent resume={section} />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Resume;
