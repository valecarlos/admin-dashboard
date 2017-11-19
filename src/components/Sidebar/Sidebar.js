import React, { Component } from 'react'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton'
import { Link, withRouter } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../assets/img/CVLogo.svg'

class Sidebar extends Component {
  render() {
    const { isNavCollapsed } = this.props
    console.log("ohhh", isNavCollapsed)
    const classes = 'sidebar' + (isNavCollapsed ? ' visible' : '')
    return (
      <div className={classes}>
        <div className="sidebar__header">
          <img src={logo} alt="Logo Carlos Valencia" className="logo"/>
        </div>
        <div className="sibebar__content">
          <ul>
            <li>
              <Link to="/">
                <FlatButton style={{textAlign: 'left'}} labelStyle={{textTransform: 'none'}} label="Dashboard" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">dashboard</FontIcon>} /> 
              </Link>
            </li>
            <li>
              <Link to="/buttons">
                <FlatButton style={{textAlign: 'left'}} labelStyle={{textTransform: 'none'}} label="Buttons" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">home</FontIcon>} />
              </Link>
            </li>
            <li>
              <Link to="/charts">
                <FlatButton style={{textAlign: 'left'}} labelStyle={{textTransform: 'none'}} label="Charts" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">pie_chart</FontIcon>} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isNavCollapsed: state.settings.isNavCollapsed
  }
};

export default withRouter(connect(
  mapStateToProps
)(Sidebar))
