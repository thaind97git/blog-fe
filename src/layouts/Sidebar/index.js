import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUserSecret,
  FaGithub,
  FaHashtag,
  FaStackOverflow,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';
import useWindowSize from '@/hooks/useWindowSize';

const routes = [
  {
    link: '/',
    label: 'Home',
    icon: FaHome,
  },
  {
    link: '/about',
    label: 'About',
    icon: FaUserSecret,
  },
  {
    link: '/tags',
    label: 'Tags',
    icon: FaHashtag,
  },
];

const socials = [
  {
    name: 'Github',
    code: 'github',
    link: 'https://github.com/thaind97git',
    id: 'd929df16-54c5-49f6-b57b-cf33bb843123',
    icon: FaGithub,
  },
  {
    name: 'Stackoverflow',
    code: 'stackoverflow',
    link: 'https://stackoverflow.com/users/11637854/judonguyen',
    id: '173c7111-711c-454a-8e18-d1368dd15b8f',
    icon: FaStackOverflow,
  },
];

const Sidebar = ({
  title = 'Tech-Blog',
  authorName = 'Nguyen Dinh Thai',
  avatar = 'https://avatars2.githubusercontent.com/u/42630357?s=460&v=4',
}) => {
  const { width } = useWindowSize();
  const [openDrawer, setOpenDrawer] = useState(true);
  useEffect(() => {
    if (width <= 767) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  }, [width]);
  return (
    <div className={`side-bar ${!openDrawer ? 'close' : ''}`}>
      <Link to="/">
        <h1 className="side-bar--title">{title}</h1>
      </Link>
      <img className="side-bar--logo" src={avatar} alt={authorName} />
      <h5 className="side-bar--name">{authorName}</h5>
      <div className="side-bar--menu-wrap">
        <div>
          {routes.map(route => {
            return (
              <p key={route.label}>
                <Link to={route.link}>
                  <route.icon /> <span>{route.label}</span>
                </Link>
              </p>
            );
          })}
        </div>
        <div className="side-bar--menu-wrap--socials">
          <p>
            <span>Socials</span>
          </p>
        </div>
        <div>
          {socials.map(social => {
            return (
              <p key={social.id}>
                <a href={social.link} rel="noopener noreferrer" target="_blank">
                  <social.icon /> <span>{social.name}</span>
                </a>
              </p>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => setOpenDrawer(prev => !prev)}
        className="side-bar--collapse-icon"
      >
        {openDrawer ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </div>
    </div>
  );
};

export default Sidebar;
