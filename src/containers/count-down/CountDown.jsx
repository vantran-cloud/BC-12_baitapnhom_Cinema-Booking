import React, { Component } from 'react';
import { Statistic, Row, Col } from 'antd';
import  './CountDown.scss';

export default class CountDown extends Component {

    render() {
        const { Countdown } = Statistic;
        const deadline = Date.now() + 1000 * 3 * 25 * 2 + 1000 * 30; // Moment is also OK

        function onFinish() {
            console.log('finished!');
        }

        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown value={deadline} onFinish={onFinish} />
                    </Col>
                </Row>
            </div>
        )
    }
}
