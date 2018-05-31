import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';  //to create a custom axios instance

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }  //if user doesn't have a cookie then pass empty string
  });

  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
}
