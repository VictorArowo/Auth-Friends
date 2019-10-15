import {
  LOADING_USER,
  INPUT_CHANGE,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  CLEAR_ERRORS,
  SET_AUTHENTICATED,
  SET_DATA,
  FORM_INPUT_CHANGE,
  ADD_USER
} from '../types';
import axios from 'axios';
export const inputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .post('http://localhost:5000/api/login', userData)
    .then(res => {
      setAuthorizationHeader(res.data.payload);
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
    })
    .catch(err => {
      debugger;
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const fetchData = () => dispatch => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem(
    'Token'
  );

  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res.data);
      dispatch({ type: SET_DATA, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('Token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = token => {
  const tokenId = `${token}`;
  localStorage.setItem('Token', tokenId);
  axios.defaults.headers.common['Authorization'] = token;
};

export const formInputChange = (name, value) => {
  return {
    type: FORM_INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const newUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .post('http://localhost:5000/api/friends', userData)
    .then(res => {
      dispatch({ type: SET_DATA, payload: res.data });
      history.push('/');
    })
    .catch(err => {
      debugger;
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
