import React, { Component } from 'react'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton'
import { NavLink , withRouter } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../assets/img/CVLogo.svg'
import Collapsible from '../../components/UI/Collapsible/Collapsible'
import Avatar from 'material-ui/Avatar';

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
  
  let flatButtonResult

  if (props.icon){
    flatButtonResult = (
      <FlatButton 
        labelStyle={inlineStyles.labelCollapsed} 
        style={inlineStyles.label} 
        primary={true} 
        fullWidth={true} 
        label={props.label}
        icon={<FontIcon className="material-icons">{props.icon}</FontIcon>}
        className={props.className} /> 
    )
  } else {
    const labelInitial = props.label[0].toUpperCase()
    flatButtonResult = (
      <FlatButton 
        labelStyle={inlineStyles.labelCollapsed} 
        style={inlineStyles.label} 
        primary={true} 
        fullWidth={true}
        className={props.className}>

          <Avatar
            size={24}
            className="sidebar__avatar"
          >
            {labelInitial}
          </Avatar>
          <span>
            {props.label}
          </span>
      </FlatButton> 
    )
  }
  return flatButtonResult 
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
            <li>
              <Collapsible
                rootOpenClassName="sidebar__collapsible--open"
                headerContent={<SidebarFlatButton
                  isNavCollapsed={isNavCollapsed}
                  label="UI Components"  
                  icon="blur_linear"
                  />}
                headerClassName="sidebar__flat-button--has-sub"
                headerOpenClassName="open"
                transitionTime={100}
                >
                <ul>
                  <li>
                    <NavLink  to="/ui/buttons" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                      <SidebarFlatButton
                        isNavCollapsed={isNavCollapsed}
                        label="Buttons"  
                        />
                    </NavLink >
                  </li>
                  <li>
                    <NavLink  to="/ui/collapsible" className="sidebar__navLink" activeClassName="sidebar__navLink--active">
                      <SidebarFlatButton
                        isNavCollapsed={isNavCollapsed}
                        label="collapsible"  
                        />
                    </NavLink >
                  </li>
                </ul>
              </Collapsible>
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
