import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import Home from './containers/Home';
import Movie from './containers/Movie';
import Trailer from './containers/Trailer';
import { LayoutRoute } from './components/Layout/Layout';
import './App.scss';
import './circle.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <LayoutRoute path="/home" component={Home} />
        <LayoutRoute path="/movie/:movieId" component={Movie} />
        <LayoutRoute path="/:movieId/trailer" component={Trailer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
