import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './store/configureStore'

import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div className="app h-100">
                <Sidebar />
                <Main />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
