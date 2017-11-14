import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {
  Route,
  Switch
} from 'react-router-dom'

import Dashboard from '../../containers/Dashboard/Dashboard'
import Buttons from '../Buttons/Buttons'

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <AppBar
          title=""
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: true})}
        />
        <div className="main">
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/buttons' component={Buttons} />
            <Route render={function(){
              return <p>Route not found Not Found</p>
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main