import React from 'react';
import { connect } from 'react-redux';
import { formInputChange, newUser } from '../redux/actions/actionCreators';

const CreateFriend = ({
  newFriend: { name, email, age },
  formInputChange,
  newUser,
  history
}) => {
  const handleInputChange = event => {
    formInputChange(event.target.name, event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      name,
      email,
      age
    };
    newUser(userData, history);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => state.user;

const mapActionToProps = {
  formInputChange,
  newUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(CreateFriend);
