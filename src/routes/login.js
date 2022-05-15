import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth_service";
import Header from '../components/containers/Header';
import MainBtn from "../components/buttons/MainBtn";
import inputs from '../components/inputs/inputs.module.css';
import routes from './routes.module.css';
import Footer from '../components/containers/Footer';
import BackTitle from '../components/containers/BackTitle';
import { Link } from "react-router-dom";


// This alerts the user to the required field
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// Class for logging in
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password)
      .then((data) => {
        if(data) {
         window.location.assign('/profile')
        }
      },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <BackTitle value={'Login'} />
        <Form
          onSubmit={this.handleLogin}
          ref={c => {this.form = c;}}
          >
          <div className={routes.center}>
            <div className="form-group">
              <Input
                type="text"
                className={`form-control ${inputs.basicLrg}`}
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
                placeholder={'Email'}
              />
            </div>
            <div className="form-group">
              <Input
                type="password"
                className={`form-control ${inputs.basicLrg}`}
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
                placeholder={'Password'}
              />
            </div>
          </div>
          <div className={routes.textAlign}>
            <Link to={'/register'} className={routes.margin}>Register </Link>
            <Link to={'/forgot_password'} className={routes.margin}>Forgot Pasword</Link>
          </div>

          <MainBtn disabled={this.state.loading} btnText={'Login'}>
            {this.state.loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
          </MainBtn >
          {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
        <Footer />
      </div>
    );
  }
}