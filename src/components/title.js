import React, { Component } from 'react';

class Title extends Component {
    render() {
        const {title, subtitle, icon, onIconClick} = this.props;
        const iconName = `icon-${icon}`;
        return <div className="title">
            <h1 className='h1'>{title}</h1>
            <div className="title-desc">
                <h3  className='h3'>{subtitle}</h3>
                <i onClick={onIconClick} className={iconName} ></i>
            </div>
        </div>
    }
}

export default Title;