//unused possibly needed later
import { combineReducers } from 'redux';

const item = (state = '', action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return '';

    default:
      return state;
  }
};

const shelf = (state = false, action) => {
  switch (action.type) {
    case 'GET_SHELF': 
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  item,
  shelf,
});