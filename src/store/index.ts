import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './rootReducer';
import { watchReadCharacterSheetList, watchDeleteCharacterSheet } from './characterSheets/saga';
import { watchCreateCharacterSheet, watchUpdateCharacterSheet } from './singleCharacterSheet/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchReadCharacterSheetList);
sagaMiddleware.run(watchCreateCharacterSheet);
sagaMiddleware.run(watchDeleteCharacterSheet);
sagaMiddleware.run(watchUpdateCharacterSheet);
export default store;