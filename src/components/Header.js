import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import SearchBar from './SearchBar';
export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>WISH IM</h1>
        </Link>
        <SearchBar />
        <div className="header_nav">
        <Link className="header__nav__link button" to="/lists">
          My lists
        </Link>        
        <Link className="header__nav__link button" to="/following">
          Following
        </Link>                
        <Link className="header__nav__link button" to="/profile">
          <span className="fa fa-user-circle"></span>
        </Link>        
        <Link className="header__nav__link button" to="/messages">
          <span className="fa fa-envelope"></span>
        </Link> 
        <Link className="header__nav__link button" to="/notifications">
          <span className="fa fa-bell"></span>
        </Link>                                  
        <button className="header__nav__link button " onClick={startLogout}><span className="fa fa-sign-out"></span></button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
