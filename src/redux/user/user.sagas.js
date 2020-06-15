import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';


export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
  } catch (error) {
    
  }
}
export function* signInWithEmail({payload:{email,password}}){
  
}

export function* onGoogleSignStart() {
  yield  takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignStart)])
}