import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/actionCreators';

const Navbar = ({ logoutUser }) => {
  return (
    <div>
      <NavLink to="/">Friends</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/createFriend">CreateFriend</NavLink>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

const mapStateToProps = state => state.user;

const mapActionToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Navbar);
