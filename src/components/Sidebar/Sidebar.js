import React, { Component } from 'react'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton'
import { NavLink , withRouter } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../assets/img/CVLogo.svg'

class Sidebar extends Component {
  render() {
    const navLinkStyle = {
      borderRight: '2px solid transparent',
      display: 'block',
      padding: '2px 0px',
      transition: 'all 0.2s ease-in'
    }
    const navLinkActiveStyle = {
      borderRight: '2px solid rgb(143, 96, 255)'
    }

    const { isNavCollapsed } = this.props
    const classes = 'sidebar' + (isNavCollapsed ? ' visible' : '')
    return (
      <div className={classes}>
        <div className="sidebar__header">
          <img src={logo} alt="Logo Carlos Valencia" className="logo"/>
        </div>
        <div className="sibebar__content">
          <ul>
            <li>
              <NavLink exact to="/" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton style={{textAlign: 'left'}} labelStyle={{textTransform: 'none'}} label="Dashboard" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">dashboard</FontIcon>} /> 
              </NavLink >
            </li>
            <li>
              <NavLink  to="/buttons" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton style={{textAlign: 'left'}} labelStyle={{textTransform: 'none'}} label="Buttons" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">home</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/charts" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton style={{textAlign: 'left'}} labelStyle={{textTransform: 'none'}} label="Charts" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">pie_chart</FontIcon>} />
              </NavLink >
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
