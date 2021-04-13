import GitHub from '@/components/Github';
import Stackoverflow from '@/components/Stackoverflow';
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about--wrapper">
        <h3>{"I'm Nguyen Dinh Thai"}</h3>
        <h4>Studied at FPT University (Software Engineering)</h4>
        <p>
          {
            "I'm started as a front-end Web developer. My main technical stack is JavaSript (ReactJs) / NodeJs, and in the future will go with Native and also DevOps to become a full-stack developer"
          }
        </p>
        <em>
          {
            "Don't be confident when you study Information Technology, just be confident when you can make the product."
          }
        </em>
        <p>
          <code className="language-text">Code for fun and Code for food</code>
        </p>
        <hr />
        <div className="about--socials">
          <div>
            My Stackoverflow
            <Stackoverflow />
          </div>
          <div>
            My Github
            <GitHub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
