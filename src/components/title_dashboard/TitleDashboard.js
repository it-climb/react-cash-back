import React from 'react';
import {connect}  from 'react-redux';
import TitleTop         from 'TitleTop';
import TitleMiddle      from '../title_middle/titleMiddle';
// import TitleTop      from './../title_top/TitleTop';

var TitleDashboard = React.createClass({

    render: function () {
        return (
            <div>
                <TitleTop/>
                <TitleMiddle/>
                {/*<div className="img_title_middle">*/}
                {/*</div>*/}
                {/*TitleBottom*/}
                <div className="img_title_bottom">
                </div>
            </div>
        )
    }
});

export default TitleDashboard;
// export default connect()(TitleDashboard);



