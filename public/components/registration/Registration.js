import React, {Component, PropTypes} from 'react';
import {connect}  from 'react-redux';
import {
  createUser,
} from './../../actions/user';
import {validator} from './../../utils/validator';

const selector = state => ({
  user: state.user,
});

const startClass = "input-group";
const okClass = "input-group has-success";
const errClass = "input-group has-error";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      login: "",
      email: "",
      firstnameClass: startClass,
      lastnameClass: startClass,
      loginClass: startClass,
      emailClass: startClass,
      confirmPasswordClass: startClass,
    };
  }

  // static propTypes = {
  //   user: PropTypes.object.isRequired,
  //   createUser: PropTypes.func.isRequired,
  // };

  _handleChange(e) {
    let field = {[e.target.name]: e.target.value};
    this.setState( field );
    console.log(' onChange value:', e.target.value, ' name:', e.target.name, ' field:', field);
  };

  _onSubmitForm(e) {
    e.preventDefault();
    console.log("onSubmit");
    let userRef = {
      firstname: this.refs.firstname.value.trim(),
      lastname: this.refs.lastname.value.trim(),
      login: this.refs.login.value.trim(),
      email: this.refs.email.value.trim(),
      password: this.refs.password.value.trim(),
      confirmPassword: this.refs.confirmPassword.value.trim(),
    }
    let errFields = [];
    for (var ref in userRef) {
      if (validator(userRef[ref], ref)) {
        let fieldClassName = ref+'Class';
        let fieldCl = {[fieldClassName]: okClass}
        this.setState( fieldCl );
      } else {
        errFields.push(ref);
        let fieldClassName = ref+'Class';
        let fieldCl = {[fieldClassName]: errClass}
        this.setState( fieldCl );
      }
    }
    if (userRef.password !== userRef.confirmPassword) {
      console.log('password !== confirmPassword');
      errFields.push('confirmPassword');
      this.setState({ confirmPasswordClass: errClass });
    }
    if (errFields.length > 0) {
      console.log('errors in:', errFields);
      return;
    }
    console.log("All OK");
    this.props.createUser(userRef);

  };

  render() {
    // const {user} = this.props;
    let st = this.state;
    console.log('90 state:', st);
    return (
      <div className="container">
        <div id="registbox" style={{marginTop: '50px'}}
             className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Registration</div>
            </div>

            <div style={{paddingTop: '30px'}} className="panel-body">

              <div style={{display: 'none'}} id="regist-alert" className="alert alert-danger col-sm-12"></div>

              <form
                id="registform"
                className="form-horizontal"
                role="form"
                onSubmit={this._onSubmitForm.bind(this)}
              >

                <div style={{marginBottom: '25px'}} className={this.state.firstnameClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-firstname" type="text" className="form-control" name="firstname"
                         placeholder="firstname" ref="firstname" value={this.state.firstname}
                         onChange={this._handleChange.bind(this)} />
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.lastnameClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-lastname" type="text" className="form-control" name="lastname"
                         placeholder="lastname" ref="lastname" value={this.state.lastname}
                         onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.loginClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-login" type="text" className="form-control" name="login" placeholder="login"
                         ref="login" value={this.state.login} onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.emailClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-email" type="text" className="form-control" name="email" placeholder="email"
                         ref="email" value={this.state.email} onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="regist-password" type="password" className="form-control" name="password"
                         placeholder="password" ref="password" onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.confirmPasswordClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="regist-confirm-password" type="password" className="form-control" name="confirm-password"
                         placeholder="confirm password" ref="confirmPassword" onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginTop: '10px'}} className="form-group">
                  <div className="col-sm-12 controls">
                    {/*<a id="btn-regist" className="btn btn-success" onClick={this.registrateUser}>Registrate</a>*/}
                    <input
                      type="submit"
                      value="Registrate"
                      id="btn-regist"
                      className="btn btn-success"
                    />
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

export default connect(selector, {
  createUser
})(Registration);