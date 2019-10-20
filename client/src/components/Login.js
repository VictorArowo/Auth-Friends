import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser, inputChange } from '../redux/actions/actionCreators';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerDiv = styled.div`
  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: row;

  img {
    width: 60%;
  }

  .right {
    margin-top: 50px;
  }
`;

const Login = ({
  formValue: { username, password },
  inputChange,
  loginUser,
  history,
  authenticated
}) => {
  const handleInputChange = event => {
    inputChange(event.target.name, event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };
    loginUser(userData, history);
  };

  return (
    <Div>
      {authenticated && <Redirect to="/" />}
      <InnerDiv>
        <img src="image.svg" />
        <div class="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </InnerDiv>
    </Div>
  );
};

const mapStateToProps = state => state.user;

const mapActionToProps = {
  inputChange,
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);
