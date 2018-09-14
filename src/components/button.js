import React, { Component } from 'react';

export class CircleButton extends Component {
    render() {
        const {icon, color} = this.props;
        const iconName = `icon-${icon}`;
        
        return <div className='circle-button' style={{backgroundColor: color}} >
            <i className={iconName} ></i>
        </div>;
    }
}