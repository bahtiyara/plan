import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {title, body} = this.props;
        return <div className='card'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>;
    }
}

export default Card;