import React, {Component} from 'react';
import {connect}  from 'react-redux';
import TitleTop         from 'TitleTop';
import TitleMiddle      from '../title_middle/TitleMiddle';
import TitleBottom      from '../title_bottom/TitleBottom';

class TitleDashboard extends Component {

    render () {
        return (
            <div className = "dashboard">
                <TitleTop/>
                <TitleMiddle/>
                <TitleBottom/>
            </div>
        )
    }
}

// export default TitleDashboard;
export default connect()(TitleDashboard);



