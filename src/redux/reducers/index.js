import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import item from './item.reducer';

const store = combineReducers({
  user,
  login,
  item
});

export default store;
