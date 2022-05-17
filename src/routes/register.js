import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth_service";
import inputs from "../components/inputs/inputs.module.css";
import routeCSS from '../routes/routes.module.css';
import MainBtn from "../components/buttons/MainBtn";
import Header from '../components/containers/Header';
import BackTitle from '../components/containers/BackTitle';
import Footer from '../components/containers/Footer';
import { Link } from "react-router-dom";

// Checks if the value is filled in
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
// Checks if the value is a valid email
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 8 || value.length > 16) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 8 and 16 characters.
      </div>
    );
  }
};
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }
  onChangeFirstname(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastname(e) {
    this.setState({
      last_name: e.target.value
    });
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
  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.signup(
        this.state.first_name,
        this.state.last_name,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }
  render() {
    if(!this.state.successful) {
      return (
        <div className={routeCSS.pageContainer}>
          <div>
            <Header />
            <BackTitle value={"Sign Up"} />
            <div className={routeCSS.center}>
              <Form
                onSubmit={this.handleRegister}
                ref={c => {
                  this.form = c;
                }}
              >
                {!this.state.successful && (
                  <div>
                    <div className="form-group">
                      <Input
                        type="text"
                        className={`form-control ${inputs.basicLrg}`}
                        name="firstname"
                        value={this.state.first_name}
                        onChange={this.onChangeFirstname}
                        validations={[required]}
                        placeholder={'First Name'}
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        className={`form-control ${inputs.basicLrg}`}
                        name="lastname"
                        value={this.state.last_name}
                        onChange={this.onChangeLastname}
                        validations={[required]}
                        placeholder={'Last Name'}
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="email"
                        className={`form-control ${inputs.basicLrg}`}
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required, email]}
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
                        validations={[required, vpassword]}
                        placeholder={'Password'}
                      />
                    </div>
                    <MainBtn btnText={'Sign Up'} />
                  </div>
                )}
                {this.state.message && (
                  <div className="form-group">
                    <div
                      className={
                        this.state.successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
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
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <BackTitle value={"To Home"} />
          <h1>Congratulations!</h1>
          <p className={routeCSS.textAlign}>You successfully registered</p>
          <Link to={'/login'} className={routeCSS.textDecor}><MainBtn btnText="Login" /></Link>
          <Footer />
        </div>
      )
    }
    
  }
}