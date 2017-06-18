import React, {Component} from 'react';
import {connect}  from 'react-redux';
import PropTypes from "prop-types";
import {validator} from './../../utils/validator';
import {loginUser} from './../../actions/user';

const selector = state => ({
  user: state.user,
});

const {func, object} = PropTypes;
const startClass = "input-group";
const okClass = "input-group has-success";
const errClass = "input-group has-error";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: "",
      // password: "",
      emailClass: startClass,
      passwordClass: startClass,
    };
  }

  _handleChange(e) {
    let field = {[e.target.name]: e.target.value};
    this.setState(field);
  }

  _onSubmitForm(e) {
    e.preventDefault();
    let userRef = {
      email: this.refs.email.value.trim(),
      password: this.refs.password.value.trim(),
    }
    let errFields = [];
    for (var ref in userRef) {
      if (validator(userRef[ref], ref)) {
        let fieldClassName = ref + 'Class';
        let fieldCl = {[fieldClassName]: okClass}
        this.setState(fieldCl);
      } else {
        errFields.push(ref);
        let fieldClassName = ref + 'Class';
        let fieldCl = {[fieldClassName]: errClass}
        this.setState(fieldCl);
        console.log("login 44 error: ", ref);
      }
    }
    if (errFields.length > 0) {
      console.log('login errors in:', errFields);
      return;
    }
    console.log("Login OK");
    this.props.loginUser(userRef);
    //fetch(url, {  credentials: 'include'   })
  }

  render() {
    return (
      <div className="container">
        <div id="loginbox" style={{marginTop: '50px'}}
             className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign In</div>
              <div style={{float: 'right', fontSize: '80%', position: 'relative', top: '-10px'}}><a
                href="#/forgot_password">Forgot password?</a></div>
            </div>

            <div style={{paddingTop: '30px'}} className="panel-body">

              <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>

              <form
                id="loginform"
                className="form-horizontal"
                role="form"
                onSubmit={this._onSubmitForm.bind(this)}
              >

                <div style={{marginBottom: '25px'}} className={this.state.emailClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="login-email" type="text" className="form-control" name="email" placeholder="email"
                         ref="email" value={this.state.email} onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.passwordClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="login-password" type="password" className="form-control" name="password"
                         placeholder="password" ref="password" onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginTop: '10px'}} className="form-group">
                  <div className="col-sm-12 controls">
                    <div className="col-sm-12 controls">
                      <input
                        type="submit"
                        value="Registrate"
                        id="btn-regist"
                        className="btn btn-success"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12 control">
                    <div style={{borderTop: '1px solid#888', paddingTop: '15px', fontSize: '85%'}}>
                      Don't have an account! <a href="#/registration"> Sign Up Here </a>
                    </div>
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

Login.propTypes = {
  user: object.isRequired,
  loginUser: func.isRequired,
};

export default connect(selector, {
  loginUser,
})(Login);