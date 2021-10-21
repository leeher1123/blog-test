import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sharedSlice from '../views/shared/redux/slice';
import userSlice from '../views/user/redux/slice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shared: sharedSlice,
    auth: userSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
