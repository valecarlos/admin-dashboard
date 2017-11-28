import React, { Component } from 'react'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton'
import { NavLink , withRouter } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../assets/img/CVLogo.svg'

class Sidebar extends Component {
  render() {
    const { isNavCollapsed } = this.props
    //inline styles to override MUI defaults
    let inlineStyles = {
      label : {
        lineHeight: '40px',
        height: '40px',
        textAlign: 'left'
      },
      labelCollapsed : {
        transition: 'padding 0.2s ease-in', 
        textTransform: 'none'
      }
    }

    if (isNavCollapsed){
      inlineStyles.labelCollapsed.paddingLeft = '16px'
    }
    const classes = 'sidebar' + (isNavCollapsed ? '' : ' visible')
    return (
      <div className={classes}>
        <div className="sidebar__header">
          <img src={logo} alt="Logo Carlos Valencia" className="logo"/>
        </div>
        <div className="sibebar__content">
          <ul>
            <li>
              <NavLink exact to="/" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <FlatButton 
                  labelStyle={inlineStyles.labelCollapsed} 
                  style={inlineStyles.label} 
                  label="Dashboard" 
                  primary={true} 
                  fullWidth={true} 
                  icon={<FontIcon className="material-icons">dashboard</FontIcon>} /> 
              </NavLink >
            </li>
            <li>
              <NavLink  to="/buttons" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <FlatButton 
                  labelStyle={inlineStyles.labelCollapsed} 
                  style={inlineStyles.label} 
                  label="UI Components" 
                  primary={true} 
                  fullWidth={true} 
                  icon={<FontIcon className="material-icons">blur_linear</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/charts" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <FlatButton 
                  labelStyle={inlineStyles.labelCollapsed} 
                  style={inlineStyles.label} 
                  label="Charts" 
                  primary={true} 
                  fullWidth={true} 
                  icon={<FontIcon className="material-icons">pie_chart</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/maps" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <FlatButton 
                  labelStyle={inlineStyles.labelCollapsed} 
                  style={inlineStyles.label} 
                  label="Maps" 
                  primary={true} 
                  fullWidth={true} 
                  icon={<FontIcon className="material-icons">map</FontIcon>} />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/widgets" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <FlatButton 
                  labelStyle={inlineStyles.labelCollapsed} 
                  style={inlineStyles.label} 
                  label="Widgets" 
                  primary={true} 
                  fullWidth={true} 
                  icon={<FontIcon className="material-icons">widgets</FontIcon>} />
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
