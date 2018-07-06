//unused possibly needed later
import { combineReducers } from 'redux';


const shelf = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SHELF': 
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  shelf,
});