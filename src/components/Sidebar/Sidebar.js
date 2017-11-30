import React, { Component } from 'react'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton'
import { NavLink , withRouter } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../assets/img/CVLogo.svg'

const SidebarFlatButton = (props) => {
  const { isNavCollapsed } = props
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

  return (
    <FlatButton 
      labelStyle={inlineStyles.labelCollapsed} 
      style={inlineStyles.label} 
      primary={true} 
      fullWidth={true} 
      label={props.label}
      icon={<FontIcon className="material-icons">{props.icon}</FontIcon>} /> 
  )
}
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
                <SidebarFlatButton
                  isNavCollapsed={isNavCollapsed}
                  label="Dashboard" 
                  icon="dashboard" /> 
              </NavLink >
            </li>
            <li>
              <NavLink  to="/buttons" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <SidebarFlatButton
                  isNavCollapsed={isNavCollapsed}
                  label="UI Components"  
                  icon="blur_linear" />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/charts" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <SidebarFlatButton
                  isNavCollapsed={isNavCollapsed}
                  label="Charts"  
                  icon="pie_chart" />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/maps" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <SidebarFlatButton
                  isNavCollapsed={isNavCollapsed}
                  label="Maps"  
                  icon="map" />
              </NavLink >
            </li>
            <li>
              <NavLink  to="/widgets" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                <SidebarFlatButton
                  isNavCollapsed={isNavCollapsed}
                  label="Widgets"  
                  icon="widgets" />
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
