import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import CharSheetList from './components/CharSheetList';
import CharSheet from './components/CharSheet';
import CreateCharSheet from './components/CreateCharSheet';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/char-sheet-list">
            <CharSheetList />
          </Route>
          <Route path="/char-sheet/:id">
            <CharSheet />
          </Route>
          <Route path="/create-char-sheet">
            <CreateCharSheet />
          </Route>
          <Redirect from='/' to='/char-sheet-list' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
