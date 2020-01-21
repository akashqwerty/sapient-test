import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import CharacterList from './Container/Characters/index';
import {store}  from './store/store'
import { getCharacterList } from './store/CharacterList/action';

store.dispatch(getCharacterList());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <CharacterList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
