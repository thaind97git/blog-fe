import React from 'react';

const Resume = ({
  name = 'Thai Nguyen',
  email = 'thaind97.dev@gmail.com',
  phone = '0934496440',
  address = '41 - 30 Street, District Thu Duc',
}) => {
  return (
    <div className="resume">
      <div className="resume--header">
        <div className="resume--header--left">{name}</div>
        <div className="resume--header--right">
          <span>{email}</span>
          <br />
          <span>{phone}</span>
          <br />
          <span>{address}</span>
        </div>
      </div>
      <section className="resume--section">
        <div className="resume--section--left">Education</div>
        <div className="resume--section--right">
          <hr />
          <h2>Software Engineer</h2>
          <span>FPT University - Ho Chi Minh, District 9</span>
        </div>
      </section>
      <section className="resume--section">
        <div className="resume--section--left">Employee History</div>
        <div className="resume--section--right">
          <hr />
          <h2>Web Developer</h2>
          <span>Wao Company - Ho Chi Minh, Binh Thanh District</span>
        </div>
      </section>
    </div>
  );
};

export default Resume;
