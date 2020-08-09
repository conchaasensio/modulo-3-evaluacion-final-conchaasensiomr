import React from 'react';
import Rick_and_Morty_logo from '../images/Rick_and_Morty_logo.png';
import title_image from '../images/title_image.png';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <img
          className="header__logo"
          src={Rick_and_Morty_logo}
          alt="Rick and Morty"
        />
        <img className="header__img" src={title_image} alt="portal" />{' '}
      </div>
    </div>
  );
};

export default Header;
