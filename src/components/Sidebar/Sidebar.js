import React, { Component } from 'react'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton'
import { NavLink , withRouter } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../assets/img/CVLogo.svg'

class Sidebar extends Component {
  render() {
    const navLinkStyle = {
      // borderLeft: '4px solid transparent',
      display: 'block',
      transition: 'all 0.2s ease-in'
    }
    const navLinkActiveStyle = {
      borderLeft: '4px solid rgb(143, 96, 255)'
    }

    const { isNavCollapsed } = this.props
    let labelCollapsed = {
      transition: 'padding 0.2s ease-in', 
      textTransform: 'none'
    }
    if (isNavCollapsed){
      labelCollapsed.paddingLeft = '16px'
    }
    console.log(labelCollapsed, "yes")
    const classes = 'sidebar' + (isNavCollapsed ? '' : ' visible')
    return (
      <div className={classes}>
        <div className="sidebar__header">
          <img src={logo} alt="Logo Carlos Valencia" className="logo"/>
        </div>
        <div className="sibebar__content">
          <ul>
            <li>
              <NavLink exact to="/" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton labelStyle={labelCollapsed} style={{lineHeight: '40px', height: '40px', textAlign: 'left'}} label="Dashboard" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">dashboard</FontIcon>} /> 
              </NavLink >
            </li>
            <li>
              <NavLink  to="/buttons" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton labelStyle={labelCollapsed} style={{lineHeight: '40px', height: '40px', textAlign: 'left'}} label="UI Components" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">blur_linear</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/charts" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton labelStyle={labelCollapsed} style={{lineHeight: '40px', height: '40px', textAlign: 'left'}} label="Charts" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">pie_chart</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/maps" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton labelStyle={labelCollapsed} style={{lineHeight: '40px', height: '40px', textAlign: 'left'}} label="Maps" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">map</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/widgets" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                <FlatButton labelStyle={labelCollapsed} style={{lineHeight: '40px', height: '40px', textAlign: 'left'}} label="Widgets" primary={true} fullWidth={true} icon={<FontIcon className="material-icons">widgets</FontIcon>} />
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
