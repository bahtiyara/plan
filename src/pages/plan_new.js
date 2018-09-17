import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {Button} from '../components/button';
import {createPlan} from '../actions';
import {connect} from 'react-redux';

class PlanNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            contentHasFocus: false,
            buttonText: ''
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.changeButtonText = this.changeButtonText.bind(this);
        this.onContentChangeFocus = this.onContentChangeFocus.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onTitleKeyDown = this.onTitleKeyDown.bind(this);
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
                onBlur={this.onContentChangeFocus}
                onFocus={this.onContentChangeFocus}
                value={this.state.content}
                onChange={this.onContentChange}
                onKeyDown={this.onContentKeyDown}
                className='content h3'
                placeholder='为了达到此目标，你的计划是什么？'/>
            <Button
                text={this.state.buttonText}
                onClick={this.onButtonClick} />
        </div>;
    }

    onTitleChange(e) {
        this.setState({title: e.target.value}, this.changeButtonText);
    }

    onContentChange(e) {
        this.setState({content: e.target.value}, this.changeButtonText);
    }

    onTitleKeyDown(e) {
        if(e.key == 'Enter') {
            e.preventDefault();
            this.showAndFocus(e.target.nextSibling);
        }
    }

    showAndFocus(target, display) {
        const displayProp = display ? display : 'inline-block'
        target.style.display = displayProp;
        target.focus();
    }

    onContentKeyDown(e) {
        if(e.key == 'Backspace' && e.target.value == '') {
            e.preventDefault();
            e.target.previousSibling.focus();
        }
    }

    onContentChangeFocus(e) {
        if (e.type == 'focus') {
            this.setState({contentHasFocus: true}, this.changeButtonText);
        } else {
            this.setState({contentHasFocus: false}, this.changeButtonText);
        }
    }

    changeButtonText() {
        const {title, content, contentHasFocus} = this.state;
        if (title != '' && content == '' && !contentHasFocus) {
            this.setState({buttonText: '下一步'});
        } else if (title != '' && content != '') {
            this.setState({buttonText: '完成'});
        } else {
            this.setState({buttonText: ''});
        }
    }

    onButtonClick(e) {
        const {buttonText} = this.state;
        if (buttonText == '下一步') {
            this.showAndFocus(e.target.parentNode.childNodes[1]);
        } else if (buttonText == '完成') {
            this.props.createPlan(this.state.title, this.state.content, () => {
                this.props.history.push('/');
            });
            console.log('You clicked 完成');
        }
    }
}

export default connect(null, {createPlan})(PlanNew);