import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <FlatButton label="Dashboard" primary={true} fullWidth={true} /> 
        </Link>
        <Link to="/buttons">
          <FlatButton label="Buttons" primary={true} fullWidth={true} /> 
        </Link>
      </div>
    );
  }
}

export default Sidebar