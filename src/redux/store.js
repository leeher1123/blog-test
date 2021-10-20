import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sharedSlice from '../views/shared/redux/slice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shared: sharedSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
