import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Title from '../components/title';
import Card from '../components/card';
import {fetchPlans} from '../actions';

let numOfPlan;

class PlanIndex extends Component {
    componentDidMount() {
        this.props.fetchPlans();
    }

    render() {
        numOfPlan = _.size(this.props.plans);
        const icon = this.props.plans==null ? 'loading-green' : 'add'
        return <div className="plan-index" >
            <Title
                title={printTitle()}
                desc={this.printSubtitle()}
                icon={icon} />
            <ul className='card-list' >
                {this.renderCard()}
            </ul>
        </div>;
    }

    renderCard() {
        return _.map(this.props.plans, (plan) => {
            return <li className='card-list-item' key={plan.id}>
                <Card
                    title={plan.title}
                    body={plan.content} />
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
    } else if (currentHour >= 5 && currentHour <= 10) {
        return "早啊";
    } else if (currentHour > 10 && currentHour < 12) {
        return "上午更要打起精神哦";
    } else if (currentHour >= 12 && currentHour < 14) {
        return "午饭吃了没";
    } else if (currentHour >= 14 && currentHour < 18) {
        return "下午好";
    } else {
        return "晚上好";
    }
}

function mapStateToProps({plans}) {
    return {plans};
}

export default connect(mapStateToProps, {fetchPlans})(PlanIndex);