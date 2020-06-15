import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/user.sagas'

export default function* rootSaga() {
  yield all([
    //call(onFetchCollectionsStart),
    call(shopSagas),
    call(userSagas)
  ]);
}