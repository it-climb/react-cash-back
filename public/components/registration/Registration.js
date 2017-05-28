import React from 'react';
import {connect}  from 'react-redux';


class Registration extends React.Component {

    registEmailAndPassword(){
        let {dispatch} = this.props;
        let emailRef = this.refs.email;
        let passwordRef = this.refs.password;

        dispatch(startLoginWithEmailAndPassword(emailRef.value, passwordRef.value));
    }

    render(){
        return (
            <div className="container">
                <div id="registbox" style={{marginTop: '50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info" >
                        <div className="panel-heading">
                            <div className="panel-title">Registration</div>
                        </div>

                        <div style={{paddingTop: '30px'}} className="panel-body" >

                            <div style={{display: 'none'}} id="regist-alert" className="alert alert-danger col-sm-12"></div>

                            <form id="registform" className="form-horizontal" role="form">

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="regist-firstname" type="text" className="form-control" name="firstname" placeholder="firstname" ref="firstname"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="regist-lastname" type="text" className="form-control" name="lastname" placeholder="lastname" ref="lastname"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="regist-login" type="text" className="form-control" name="login" placeholder="login" ref="login"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="regist-email" type="text" className="form-control" name="email" placeholder="email" ref="email"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="regist-password" type="password" className="form-control" name="password" placeholder="password" ref="password"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="regist-confirm-password" type="password" className="form-control" name="confirm-password" placeholder="confirm password" ref="confirm-password"/>
                                </div>

                                <div style={{marginTop:'10px'}} className="form-group">
                                    <div className="col-sm-12 controls">
                                        <a id="btn-regist" className="btn btn-success" onClick={this.registEmailAndPassword}>Registrate</a>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Registration);