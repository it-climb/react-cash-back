import React from 'react';
import {connect}  from 'react-redux';
import TitleTop         from 'TitleTop';
import TitleMiddle      from '../title_middle/TitleMiddle';
import TitleBottom      from '../title_bottom/TitleBottom';

var TitleDashboard = React.createClass({

    render: function () {
        return (
            <div>
                <TitleTop/>
                <TitleMiddle/>
                <TitleBottom/>
            </div>
        )
    }
});

// export default TitleDashboard;
export default connect()(TitleDashboard);



