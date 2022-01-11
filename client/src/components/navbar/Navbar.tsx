import React, { ReactElement, useState } from 'react';
import './navbar.css';
import league_icon from '../../assets/league_icon.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

//champions
//items
//login

const Menu = (): JSX.Element => {
  return (
    <>
      <p className={navbar__links__container__p}>
        <Link to="champions">
          <button>Champions</button>
        </Link>
      </p>
      <p className={navbar__links__container__p}>
        <Link to="items">
          <button>Items</button>
        </Link>
      </p>
    </>
  );
};

const navbar = 'flex px-2 py-4 bg-purple-900 text-white';
const navbar__links = 'flex flex-1 justify-start';
const navbar__links__icon = 'mr-4';
const navbar__links__icon__img = 'h-10';
const navbar__links__container = 'hidden md:flex';
const navbar__links__container__p = 'flex items-center mx-4';

const navbar__login = 'hidden justify-end sm:flex';
const navbar__login__button = 'mx-4';

const navbar__menu = 'flex items-center md:hidden';
const navbar__menu__dropdown = 'flex justify-end items-end flex-col absolute top-16 right-0 bg-purple-900';
const navbar__menu__dropdown__login = 'flex flex-col justify-end items-center sm:hidden';
const navbar__menu__dropdown__login_button = 'flex mx-4';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false as boolean);

  return (
    <div className={navbar}>
      <div className={navbar__links}>
        <div className={navbar__links__icon}>
          <Link to="/">
            <img className={navbar__links__icon__img} src={league_icon} alt="league_icon" />
          </Link>
        </div>
        <div className={navbar__links__container}>
          <Menu />
        </div>
      </div>
      <div className={navbar__login}>
        <button className={navbar__login__button}>Sign In</button>
        <button className={navbar__login__button}>Sign Up</button>
      </div>
      <div className={navbar__menu}>
        {menuOpen ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setMenuOpen(true)} />
        )}
        {menuOpen && (
          <div className={navbar__menu__dropdown}>
            <Menu />
            <div className={navbar__menu__dropdown__login}>
              <button className={navbar__menu__dropdown__login_button}>Sign In</button>
              <button className={navbar__menu__dropdown__login_button}>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
