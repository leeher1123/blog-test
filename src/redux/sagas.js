import { all, fork } from 'redux-saga/effects';

import sharedSaga from '../views/shared/redux/saga';

const sagas = function* () {
  yield all([
    fork(sharedSaga),
  ]);
};

export default sagas;
