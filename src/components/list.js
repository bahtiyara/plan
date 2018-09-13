import React, { Component } from 'react';
import _ from 'lodash';

class List extends Component {
    render() {
        return <ul>
            {renderListItem()}
        </ul>;
    }

    renderListItem() {
        const {  }
        return _.map(this.props.plans, (plan) => {
            return <li className='card-list-item' key={plan._id}>
                <Card
                    title={plan.title}
                    body={plan.desc} />
            </li>;
        });
    }
}

export class Card extends Component {
    render() {
        return <li>
            
        </li>;
    }
}

export default List;


// <List data='Some data' list-item='card' right-btn1='More' right-btn1-style={css} right-btn1-action={doThings()} />
// list-item 可以是 String（意思是你想要用默认的）
// 可以是个 Component（意思是你想用自定义的）