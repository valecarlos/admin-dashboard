import React, { Component } from 'react';

class UnderConstruction extends Component {
  render() {
    const style = {
      icon: {
        fontSize: '90px',
        color: '#e6e6e6'
      },
      message :{
        fontSize: '24px',
        color: '#b1b1b1'
      }
    }
    return (
      <div className="row h-100 align-items-center justify-content-center">
        <div>
          <i className="material-icons" style={style.icon}>{this.props.iconName}</i>
        </div>
        <p style={style.message}>
          {this.props.message}
        </p>
      </div>
    );
  }
}

UnderConstruction.defaultProps = {
  message: 'This section is under construction',
  iconName: 'build'
}

export default UnderConstruction;