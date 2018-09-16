import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            XPosition: 0,
            YPosition: 0,
            AtLeft: false
        };
        this.handleStop = this.handleStop.bind(this);
    }

    render() {
        const {title, body, swipeable} = this.props;
        const canNotSwipe = swipeable==null ? true : false;
        return (
            <Draggable
                // allowAnyClick={true}
                // cancel={'.plan-index'}
                // bounds={{right: 0}}
                disabled={canNotSwipe}
                onStart={this.handleStart}
                // onMouseDown={this.onMouseDown}
                // onDrag={this.handleDrag}
                onStop={this.handleStop}
                position={{x:this.state.XPosition, y:this.state.YPosition}}
                axis="x">
                    <div className='card'>
                        <h2 className='h2'>{title}</h2>
                        <p className='p'>{body}</p>
                    </div>
            </Draggable>
        );
    }

    handleStart(event, data) {
        data.node.style.transition = '';
    }

    handleStop(event, data) {
        data.node.style.transition = 'all 0.3s';

        if (data.x < -30 && !this.state.AtLeft) {
            this.setState({XPosition: -116, AtLeft: true});
        } else if (data.x > -86 && this.state.AtLeft) {
            this.setState({XPosition: 0, AtLeft: false});
        }
    }
}

export default Card;