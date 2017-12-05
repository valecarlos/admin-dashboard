import React, { Component } from 'react';

class QuickSummary extends Component {
  render() {
    const style = {
      root: {
        display: 'flex',
        backgroundColor: 'purple',
        color: 'white',
        width: '100%'
      },
      iconContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '15px',
        display: 'flex',
        alignItems: 'center'
      },
      infoContainer: {
        padding: '15px',
        display: 'flex',
        flexDirection: 'column'
      },
      icon: {
        fontSize: '45px'
      }
    }

    const rootClassNames = this.props.rootClassName
    return (
      <div style={style.root}>
        <div style={style.iconContainer}>
          <i className="material-icons" style={style.icon}>{this.props.iconName}</i>
        </div>
        <div style={style.infoContainer}>
          <h5>{this.props.headerInfo}</h5>
          <p>{this.props.bottomInfo}</p>
        </div>
      </div>
    );
  }
}

QuickSummary.defaultProps = {
  rootClassName : '',
  iconName: 'home',
  headerInfo: '',
  bottomInfo: ''
}

export {QuickSummary}