import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class PlanNew extends Component {
    render() {
        return <div className='plan-new' >
            <TextareaAutosize onKeyDown={this.onTitleKeyDown} className='title h1' placeholder='你的目标是什么？' autoFocus />
            <TextareaAutosize onKeyDown={this.onContentKeyDown} className='content h3' placeholder='为了达到此目标，你的计划是什么？'/>
        </div>;
    }

    onTitleKeyDown(event) {
        if(event.key == 'Enter') {
            event.preventDefault();
            document.querySelector('.plan-new .content').style = {display: 'inline-block'};
            document.querySelector('.plan-new .content').focus();
        }
    }

    onContentKeyDown(event) {
        if(event.key == 'Backspace' && event.target.value == '') {
            event.preventDefault();
            document.querySelector('.plan-new .title').focus();
        }
    }
}

export default PlanNew;