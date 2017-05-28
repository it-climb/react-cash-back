import React from 'react';
import TitleTopNav      from '../title_top_nav/TitleTopNav';
import Footer from '../footer';

let Main = React.createClass({
    render: function () {
        return (
        <div>
            <TitleTopNav/>
            <div className="container">
                <div>
                    {this.props.children}
                </div>
            </div>
            <Footer/>
            {/*<div className="img_title_bottom_nav">*/}
            {/*</div>*/}
        </div>
        )
    }
});

export default Main;


