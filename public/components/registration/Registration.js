import React, {Component} from 'react';
import {connect}  from 'react-redux';
import PropTypes from "prop-types";
import {validator} from './../../utils/validator';
import {createUser} from './../../actions/user';

const selector = state => ({
  user: state.user,
  professions: state.professions,
});

const {func, array, object} = PropTypes;
const startClass = "input-group";
const okClass = "input-group has-success";
const errClass = "input-group has-error";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      professionId: "",
      firstNameClass: startClass,
      lastNameClass: startClass,
      loginClass: startClass,
      emailClass: startClass,
      confirmPasswordClass: startClass,
    };
  }

  _handleChange(e) {
    let field = {[e.target.name]: e.target.value};
    this.setState(field);
    // console.log('39 onChange value:', e.target.value, ' name:', e.target.name, ' field:', field);
  }

  _onSubmitForm(e) {
    e.preventDefault();
    let userRef = {
      firstName: this.refs.firstName.value.trim(),
      lastName: this.refs.lastName.value.trim(),
      login: this.refs.login.value.trim(),
      email: this.refs.email.value.trim(),
      password: this.refs.password.value.trim(),
      confirmPassword: this.refs.confirmPassword.value.trim(),
      professionId: this.refs.professionId.value.trim(),
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
        console.log("registration 64 errror:", ref);
      }
    }
    if (userRef.password !== userRef.confirmPassword) {
      console.log('registration 68: password !== confirmPassword');
      errFields.push('confirmPassword');
      this.setState({confirmPasswordClass: errClass});
    }
    if (errFields.length > 0) {
      console.log('registration errors in:', errFields);
      return;
    }
    console.log("Registration OK");
    this.props.createUser(userRef);
  }

  render() {
    const {professions} = this.props;
    let i = 0;
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

                <div style={{marginBottom: '25px'}} className={this.state.firstNameClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-firstName" type="text" className="form-control" name="firstName"
                         placeholder="firstName" ref="firstName" value={this.state.firstName}
                         onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.lastNameClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-lastName" type="text" className="form-control" name="lastName"
                         placeholder="lastName" ref="lastName" value={this.state.lastName}
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

                <div style={{marginBottom: '25px'}} className={this.state.emailClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <select id="regist-profession" className="form-control" name="professionId" ref="professionId"
                          onChange={this._handleChange.bind(this)}>
                    {
                      professions.map((profession) => {
                        return <option key={"profession" + i++}
                                       value={profession.professionId}>{profession.name}</option>
                      })
                    }
                  </select>
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

Registration.propTypes = {
  user: object.isRequired,
  createUser: func.isRequired,
  professions: array.isRequired,
};

export default connect(selector, {
  createUser,
})(Registration);