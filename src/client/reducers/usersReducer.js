import { FETCH_USERS } from '../actions';

//users api returns an array of user objects, thus the use of state = []

export default (state = [], action) => {
  switch (action.type){
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}
