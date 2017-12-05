import React, { Component } from 'react';

class Page404 extends Component {
  render() {
    const style = {
      message :{
        fontSize: '65px',
        color: '#b1b1b1'
      }
    }
    return (
      <div className="row h-100 align-items-center justify-content-center">
        <p style={style.message}>
          404
        </p>
      </div>
    );
  }
}

Page404.defaultProps = {
}

export default Page404;