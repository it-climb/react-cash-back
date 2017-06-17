import React, {Component} from 'react';
import {connect}  from 'react-redux';
import PropTypes from "prop-types";
import {validator} from './../../utils/validator';
import {createUser, inputUser} from './../../actions/user';

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
      firstNameClass: startClass,
      lastNameClass: startClass,
      loginClass: startClass,
      emailClass: startClass,
      professionIdClass: startClass,
      confirmPasswordClass: startClass,
    };
  }

  _handleChange(e) {
    const field = {[e.target.name]: e.target.value.trim()};
    this.props.inputUser(field);
  }

  _onSubmitForm(e) {
    e.preventDefault();
    let user = this.props.user;
    let errFields = [];
    for (var ref in user) {
      let fieldCl;
      let fieldClassName = ref + 'Class';
      if (validator(user[ref], ref)) {
        fieldCl = {[fieldClassName]: okClass}
      } else {
        errFields.push(ref);
        fieldCl = {[fieldClassName]: errClass}
        console.log("registration 85 eror:", ref);
      }
      this.setState(fieldCl);
    }
    if (user.password !== user.confirmPassword) {
      console.log('registration 89: password !== confirmPassword');
      errFields.push('confirmPassword');
      this.setState({confirmPasswordClass: errClass});
    }
    if (errFields.length > 0) {
      console.log('registration errors in:', errFields);
      return;
    }
    console.log("Registration Form Validation OK");
    createUser(user)
      .then(res => {
        consol.log("registration 63 done:", res);
      })
      .catch(ValidationError => {
        console.log('ValidationError: ', ValidationError);
      })
      .catch(err => {
        consol.log("registration 66 error:", err);
      })
  }

  render() {
    const {
      professions, firstName, lastName, login, email, professionId, password, confirmPassword
    } = this.props;
    console.log('props:', this.props);
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
                         placeholder="firstName" ref="firstName" value={firstName}
                         onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.lastNameClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-lastName" type="text" className="form-control" name="lastName"
                         placeholder="lastName" ref="lastName" value={lastName}
                         onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.loginClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-login" type="text" className="form-control" name="login" placeholder="login"
                         ref="login" value={login} onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.emailClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="regist-email" type="text" className="form-control" name="email" placeholder="email"
                         ref="email" value={email} onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.professionIdClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <select id="regist-profession" className="form-control" name="professionId" ref="professionId"
                          value={professionId} onChange={this._handleChange.bind(this)}>
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
                         placeholder="password" ref="password" value={password}
                         onChange={this._handleChange.bind(this)}/>
                </div>

                <div style={{marginBottom: '25px'}} className={this.state.confirmPasswordClass}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="regist-confirm-password" type="password" className="form-control" name="confirmPassword"
                         placeholder="confirm password" ref="confirmPassword" value={confirmPassword}
                         onChange={this._handleChange.bind(this)}/>
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
  inputUser: func.isRequired,
  professions: array.isRequired,
};

export default connect(selector, {
  createUser,
  inputUser,
})(Registration);