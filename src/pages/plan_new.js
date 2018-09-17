import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {Button} from '../components/button';

class PlanNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            contentHasFocus: false,
            buttonState: ''
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.printButtonText = this.printButtonText.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        return <div className='plan-new' >
            <TextareaAutosize
                value={this.state.title}
                onChange={this.onTitleChange}
                onKeyDown={this.onTitleKeyDown}
                className='title h1'
                placeholder='你的目标是什么？'
                autoFocus />
            <TextareaAutosize
                onBlur={() => this.setState({contentHasFocus: false})}
                onFocus={() => this.setState({contentHasFocus: true})}
                value={this.state.content}
                onChange={this.onContentChange}
                onKeyDown={this.onContentKeyDown}
                className='content h3'
                placeholder='为了达到此目标，你的计划是什么？'/>
            <Button
                text={this.printButtonText()}
                onClick={this.onButtonClick} />
        </div>;
    }

    onTitleChange(e) {
        this.setState({title: e.target.value});
    }

    onContentChange(e) {
        this.setState({content: e.target.value});
    }

    onTitleKeyDown(e) {
        if(e.key == 'Enter') {
            e.preventDefault();
            e.target.nextSibling.style.display = 'inline-block';
            e.target.nextSibling.focus();
        }
    }

    onContentKeyDown(e) {
        if(e.key == 'Backspace' && e.target.value == '') {
            e.preventDefault();
            e.target.previousSibling.focus();
        }
    }

    printButtonText() {
        if (this.state.title != '' && this.state.content == '' && !this.state.contentHasFocus) {
            // this.setState({buttonState: 'next'});
            return '下一步';
        }
        if (this.state.title != '' && this.state.content != '') {
            // this.setState({buttonState: 'done'});
            return '完成';
        }
        // this.setState({buttonState: ''});
        return '';
    }

    onButtonClick() {
        switch (this.state.buttonState) {
            case 'done':
                console.log(`Uploading data, title:${this.state.title}, content:${this.state.content}`);
            case 'next':
                console.log('Button pressed, content input is shown and focused.');
        }
    }
}

export default PlanNew;