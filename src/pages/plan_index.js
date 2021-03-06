import React, { Component } from 'react';
import {connect} from 'react-redux';
import size from 'lodash/size';
import map from 'lodash/map';

import Title from '../components/title';
import Card from '../components/card';
import {CircleButton} from '../components/button';
import {fetchPlans, trashPlan} from '../actions';

let numOfPlan;

class PlanIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPlan: Number
        }
    }

    componentDidMount() {
        this.props.fetchPlans();
    }

    render() {
        const {plans} = this.props;
        numOfPlan = size(plans);
        const icon = plans == null ? 'loading-green' : 'add'
        return <div className="plan-index" >
            <Title
                title={printTitle()}
                subtitle={this.printSubtitle()}
                icon={icon}
                onIconClick={() => this.props.history.push('/new')} />
            <ul className='card-list' >
                {this.renderCard()}
            </ul>
        </div>;
    }
    
    renderCard() {
        return map(this.props.plans, (plan) => {
            return <li className='card-list-item' key={plan.id}>
                <Card
                    swipeable
                    title={plan.title}
                    body={plan.content} />
                <CircleButton
                    onClick={(e) => {
                        e.persist();
                        this.props.trashPlan(plan.id, () => {
                            e.target.parentElement.parentElement.remove();
                        });
                    }}
                    icon='bin white'
                    color='#FF5263' />
            </li>;
        });
    }

    printSubtitle() {
        if (this.props.plans == null) {
            return '稍等加载…';
        }
        if (numOfPlan == 0) {
            return '你还没有任何计划，创建一个吧';
        }
        return `你有${numOfPlan}个未完成计划`;
    }
}

function printTitle() {
    var date = new Date();
    var currentHour = date.getHours();
    if (currentHour >= 0 && currentHour < 5) {
        return "还没睡啊";
    } else if (currentHour >= 5 && currentHour <= 9) {
        return "早啊";
    } else if (currentHour > 9 && currentHour < 12) {
        return "上午更要打起精神哦";
    } else if (currentHour >= 12 && currentHour < 13) {
        return "午饭吃了没";
    } else if (currentHour >= 13 && currentHour < 18) {
        return "下午好";
    } else {
        return "晚上好";
    }
}

function mapStateToProps({plans}) {
    return {plans};
}

export default connect(mapStateToProps, {fetchPlans, trashPlan})(PlanIndex);