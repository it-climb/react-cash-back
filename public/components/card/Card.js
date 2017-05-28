import React from 'react';
import {Thumbnail} from 'react-bootstrap';
import RangeSlider from '../range_slider/RangeSlider';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image || 'https://react-bootstrap.github.io/assets/thumbnaildiv.png',
            title: this.props.title || 'Thumbnail label',

            minValue: this.props.minValue || 0,
            maxValue: this.props.maxValue || 2000,
            step:     this.props.step || 10,
            value:    this.props.value || 0
        }
    }

    render () {
        return (
            <div>
                <Thumbnail src={this.state.image} alt={this.state.title}>
                    <h3>{this.state.title}</h3>
                    <RangeSlider value={this.state.value} minValue={this.state.minValue} maxValue={this.state.maxValue}/>
                </Thumbnail>
            </div>
        )
    }
}

export default Card;