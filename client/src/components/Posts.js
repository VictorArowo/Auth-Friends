import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/actionCreators';

const Posts = ({ posts, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {posts.map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => state.user;

const mapActionToProps = {
  fetchData
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Posts);
