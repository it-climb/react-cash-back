import React from 'react';
import {Checkbox, Grid, Row, Col} from 'react-bootstrap';
import Card from '../card/Card';
import RangeSlider from '../range_slider/RangeSlider';

class TitleMiddle extends React.Component {

    render() {

        return (
            <div className="section-cash-back">
                <h2>Банковский КБ</h2>

                <Grid>
                    <Row>
                        <Col xs={6}>
                            <Checkbox>Checkbox 1</Checkbox>
                            <RangeSlider value="0" step="10" maxValue="100"/>
                        </Col>
                        <Col xs={6}>
                            <Checkbox>Checkbox 2</Checkbox>
                            <RangeSlider value="0" step="10" maxValue="100"/>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Card title="card 1" ></Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card title="card 2"></Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card title="card 3"></Card>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TitleMiddle;
