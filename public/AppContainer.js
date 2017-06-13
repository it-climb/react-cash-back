import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import App from "./App";
import {loadProfessions} from "./actions/professions";

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  professions: state.professions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadProfessions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

export class AppContainer extends Component {

  render() {
    return (
      <App />
    )
  }
}