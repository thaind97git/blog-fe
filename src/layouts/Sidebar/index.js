import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUserSecret,
  FaHashtag,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaBlogger,
} from 'react-icons/fa';
import useWindowSize from '@/hooks/useWindowSize';
import useGetRequest from '@/hooks/useGetRequest';
import SwitchTheme from '@/components/Switch-Theme';
import Socials from './components/Socials';
import Tooltip from '@/components/Tooltip';
import { getSocials } from '@/apis/profile';

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
    link: '/blogs',
    label: 'Blogs',
    icon: FaBlogger,
  },
  {
    link: '/tags',
    label: 'Tags',
    icon: FaHashtag,
  },
];

const Sidebar = ({
  title = 'Tech-Blog',
  authorName = 'Nguyen Dinh Thai',
  avatar = 'https://avatars2.githubusercontent.com/u/42630357?s=460&v=4',
  onThemeChange,
  themeValue,
}) => {
  const { width } = useWindowSize();
  const [openDrawer, setOpenDrawer] = useState(true);

  const { data: socials, fetching: fetchingSocials } = useGetRequest({
    promiseFunction: getSocials,
  });

  useEffect(() => {
    if (width <= 767) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  }, [width]);

  return (
    <div className={`side-bar ${!openDrawer ? 'close' : ''}`}>
      <SwitchTheme
        onChange={onThemeChange}
        small={!openDrawer}
        value={themeValue}
      />
      <Link to="/">
        <h1 className="side-bar--title">{title}</h1>
      </Link>
      <img className="side-bar--logo" src={avatar} alt={authorName} />
      <h5 className="side-bar--name">{authorName}</h5>
      <div className="side-bar--menu-wrap">
        <div>
          {routes.map(({ label, link, icon: Icon }) => {
            return (
              <Tooltip tooltipId={label} title={label} key={label}>
                <p key={label}>
                  <Link to={link}>
                    <Icon />
                    <span>&nbsp;</span>
                    <span>{label}</span>
                  </Link>
                </p>
              </Tooltip>
            );
          })}
        </div>
        <div className="side-bar--menu-wrap--socials">
          <p>
            <span>Socials</span>
          </p>
        </div>
        <Socials socials={socials?.results} fetching={fetchingSocials} />
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
