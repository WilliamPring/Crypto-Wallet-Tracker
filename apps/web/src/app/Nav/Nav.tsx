import { FC } from 'react';
import './nav.scss';

export const Nav: FC = ({ children }) => {
  return (
    <div className="flex-column">
      <TopNav userName="William" />
      {children}
    </div>
  );
};

const TopNav: FC<{ userName: string }> = ({ userName }) => {
  return (
    <div>
      <nav className="topnavbar">
        <ul className="navbarcontainer">
          <li>Home</li>
          <li>Account</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
};
//Clickbox padding 3
