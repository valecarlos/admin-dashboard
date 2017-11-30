import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import {
  Route,
  Switch
} from 'react-router-dom'

import Dashboard from '../../containers/Dashboard/Dashboard'
import Buttons from '../Buttons/Buttons'
import Charts from '../Charts/Charts'

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <div className="main container-fluid">
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/ui/buttons' component={Buttons} />
            <Route path='/charts' component={Charts} />
            <Route render={function(){
              return <p>Route not found</p>
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main