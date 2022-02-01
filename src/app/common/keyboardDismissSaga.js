import { all, fork, takeEvery } from 'redux-saga/effects';
import { actionTypes, setSubmitSucceeded, hasSubmitSucceeded } from "redux-form";
import { Keyboard } from 'react-native';


function* keyboardGeneralEvents() {
  yield takeEvery(actionTypes.SET_SUBMIT_SUCCEEDED, keyboardDismisser);
}

function keyboardDismisser() {
  Keyboard.dismiss();
}


const sagas = function* rootSaga() {
  yield all([
    fork(keyboardGeneralEvents),
  ]);
}

export default sagas;