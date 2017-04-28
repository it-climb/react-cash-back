import React from 'react';
import RangeSlider from '../range_slider/RangeSlider';

var TitleMiddle = React.createClass({

    render: function () {

        return (
            <div className="section-cash-back">
                <h2>Банковский КБ</h2>
                <RangeSlider value="300" minValue="100" maxValue="400"/>
                <RangeSlider value="200" step="100"/>
            </div>
        );
    }
});

export default TitleMiddle;
