import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



// add an item
function* addItem(action) {
    try{
        const itemResponse = yield call(axios.post, '/api/shelf', action.payload);
        yield put({type: 'GET_SHELF'});  
    }
    catch (error) {
        console.log('Something went wrong in post');
    }
}

function* getShelf(action){
    try {
        const itemResponse = yield call(axios.get, '/api/shelf');
    } catch (error) {
        console.log('Something went wrong in get all');
    }
}//end getShelf

// worker Saga: will be fired on "LOGOUT" actions
function* deleteItem(action) {
    try{
        const itemResponse = yield call(axios.delete, `/api/shelf/${action.payload}`);
        yield put({type: 'GET_SHELF'});  
    }
    catch (error) {
        console.log('Something went wrong in post');
    }
}

function* itemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('GET_SHELF', getShelf);
  }

export default itemSaga;
