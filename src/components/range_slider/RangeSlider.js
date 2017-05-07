import React from 'react';

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: this.props.minValue || 0,
            maxValue: this.props.maxValue || 2000,
            step:     this.props.step || 10,
            value:    this.props.value || 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {}

    handleChange(event) {
        const value = event.target.value;
        this.setState({value: value});
    }

    render() {
        return (
            <div>
                <div>{this.state.value}</div>

                <input type="range"
                       value={this.state.value}
                       min={this.state.minValue}
                       max={this.state.maxValue}
                       step={this.state.step}
                       onChange={this.handleChange}/>
            </div>
        )
    }
}


export default RangeSlider;