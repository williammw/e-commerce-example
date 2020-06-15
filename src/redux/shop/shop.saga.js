import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import ShopActionTypes from './shop.types';
import { takeLatest, call, put, all } from 'redux-saga/effects';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    //yield means return a resolved promise object
    const snapshot = yield collectionRef.get();
    // yield call() : in case theFetching is longer then expected
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //yield put == dispatch action
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
// take 

// takeEvery : dispatch all saga EE

// takeLatest : cancel dispatch all previous and execute the latest saga

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}