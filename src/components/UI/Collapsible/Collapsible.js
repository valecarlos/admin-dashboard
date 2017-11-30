import React, { Component } from 'react';

class Collapsible extends Component {
  constructor(props){
    super(props)

    this.state = {
      isOpen: false,
      height: 0,
      transition: `height ${props.transitionTime}ms ease-in`
    }

    this.handleHeaderClick = this.handleHeaderClick.bind(this)
    this.openCollapsible = this.openCollapsible.bind(this)
    this.closeCollapsible = this.closeCollapsible.bind(this)
  }

  handleHeaderClick(){
    if(this.state.isOpen === true){
      this.closeCollapsible()
    } else{
      this.openCollapsible()
    }
  }

  openCollapsible(){
    this.setState(()=> ({
      height: this.refs.content.clientHeight,
      isOpen: true
    }))
  }

  closeCollapsible(){
    this.setState(()=> ({
      height: 0,
      isOpen: false
    }))
  }

  render() {
    const contentWrapperStyle = {
      height: this.state.height,
      overflow: 'hidden',
      transition: this.state.transition
    }
    return (
      <div className={this.props.rootClassName}>
        <div 
          className={this.props.headerClassName}
          onClick={this.handleHeaderClick}>
          {this.props.headerContent}
        </div>
        <div className={this.props.wrapperContentClassName} style={contentWrapperStyle}>
          <div 
            className={this.props.contentClassName}
            ref="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.defaultProps = {
  transitionTime: 400,
  headerClassName: '',
  headerOpenClassName: '',
  headerContent: '',
  rootClassName: '',
  rootOpenClassName: '',
  contentClassName: '',
  wrapperContentClassName: ''
}

export default Collapsible;