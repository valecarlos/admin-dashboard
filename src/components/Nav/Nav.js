import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCollapsedNav } from '../../actions'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import upperFirst from 'lodash/upperFirst'

function mapStateToProps(state) {
  return {
    isNavCollapsed: state.settings.isNavCollapsed
  };
}

class Nav extends Component {
  render() {
    const { pathname } = this.props.location
    const title = upperFirst(pathname.replace('/','')) || 'Dashboard'
    return (
      <div>
        <AppBar
          title={title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.props.onBurgerClick}
        />
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    onBurgerClick: toggleCollapsedNav 
  }
)(Nav))