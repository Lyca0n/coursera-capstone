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
        <Link className="header__nav" to="/lists">
          <a>My lists</a>
        </Link>        
        <Link className="header__nav" to="/lists">
          <a>My lists</a>
        </Link>                
        <Link className="header__nav" to="/lists">
          <a>My lists</a>
        </Link>        
        <Link className="header__nav" to="/lists">
          <a>My lists</a>
        </Link>                        
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
