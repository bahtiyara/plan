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

export class Button extends Component {
    render() {
        const {text, textColor, buttonColor, onClick} = this.props;
        const bColor = buttonColor==null ? '#05CE9D' : buttonColor;
        const tColor = textColor==null ? '#fff' : textColor;
        return <button className='button h3' onClick={onClick} style={{backgroundColor: bColor, color: tColor}} >{text}</button>;
    }
}