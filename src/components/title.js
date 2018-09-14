import React, { Component } from 'react';

class Title extends Component {
    render() {
        const {title, subtitle, icon} = this.props;
        const iconName = `icon-${icon}`;
        return <div className="title">
            <h1>{title}</h1>
            <div className="title-desc">
                <h3>{subtitle}</h3>
                <i className={iconName} ></i>
            </div>
        </div>
    }
}

export default Title;