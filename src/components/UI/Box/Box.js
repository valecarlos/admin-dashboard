import React, { Component } from 'react'

class Box extends Component {
    render() {
        const inlineStyles = {
            root: {
                padding: '10px'
            }
        }
        return (
            <div style={inlineStyles.root} className="rootClass">
                <h5>{this.props.title}</h5>
                <p>{this.props.subtitle}</p>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Box.defaultProps = {
    rootClass : '',
    title: '',
    subtitle: '',
    contentClass: ''
}

export default Box;
