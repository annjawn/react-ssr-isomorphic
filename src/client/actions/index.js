// import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  //Here we are not using a base axios object since we will receive a
  //customized copy of axios instance provided by thunk. That custom axios
  //instance is capable of handling API call via express-http-proxy which is
  //needed for SSR. The custom axios instance will be passed by client.js for
  //browser or renderer.js for server.

  // const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  const res = await api.get('/users');

  //subtle differences between redux-promise vs redux-thunk middleware
  //read this for more info - https://stackoverflow.com/questions/36577510/what-is-the-difference-between-redux-thunk-and-redux-promise
  //thunk might be an overkill here, but we will see.

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');
  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
