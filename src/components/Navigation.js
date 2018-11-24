import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { connect } from 'react-redux';
import SearchBar from './SearchBar';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar className="navigation" color="light" light expand="md">
          <NavbarBrand className="header__title" href="/">WISH IM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <SearchBar />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/lists">Mylists</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/following">Following</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile"><span className="fa fa-user-circle"></span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/messages"><span className="fa fa-envelope"></span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/notifications"><span className="fa fa-bell"></span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout" onClick={this.props.startLogout}><span className="fa fa-sign-out"></span></NavLink>
              </NavItem>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Navigation);

Navigation.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}