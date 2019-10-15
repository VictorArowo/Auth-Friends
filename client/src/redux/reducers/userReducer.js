import {
  INPUT_CHANGE,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_DATA,
  FORM_INPUT_CHANGE
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  formValue: {
    username: '',
    password: ''
  },
  posts: [],
  newFriend: {
    name: '',
    email: '',
    age: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          [action.payload.name]: action.payload.value
        }
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false
      };
    case SET_UNAUTHENTICATED:
      return initialState;

    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case SET_DATA:
      return {
        ...state,
        posts: action.payload
      };
    case FORM_INPUT_CHANGE:
      return {
        ...state,
        newFriend: {
          ...state.newFriend,
          [action.payload.name]: action.payload.value
        }
      };
    default:
      return state;
  }
}
