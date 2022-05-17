import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Header from '../components/containers/Header';
import MainBtn from "../components/buttons/MainBtn";
import inputs from '../components/inputs/inputs.module.css';
import routes from './routes.module.css';
import Footer from '../components/containers/Footer';
import auth_service from "../services/auth_service";

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

export default class Reset extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onPass1Change = this.onPass1Change.bind(this);
    this.onPass2Change = this.onPass2Change.bind(this);
    this.state = {
      pass1: '',
      pass2: '',
      message: "",
      display: ''
    };
    this.params = window.location.pathname.split('/')
    this.id= this.params[2]
  }
  setDisplay(e) {
    e.preventDefault()
    this.setState({
      display: this.valid
    })
  }
  onPass1Change(e) {
    this.setState({
      pass1: e.target.value
    });
  }
  onPass2Change(e) {
    this.setState({
      pass2: e.target.value
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
    });
    this.form.validateAll();
    // Check if the values match
    if(this.checkBtn.context._errors.length === 0) {
      if(this.state.pass2 === this.state.pass1) {
        auth_service.update_password({
          newPass: this.state.pass1, 
          id: this.id
        })
      } else {
        this.setState({
            message: "Passwords don't match"
        })
      }
    } 
    
  }
  
  render() {
    
    return (
      <div className={routes.pageContainer}>
        <Header />
        <Form
          onSubmit={this.handleLogin}
          ref={c => {this.form = c;}}
          >
          <div className={routes.center}>
            <div className="form-group">
              <Input
                type="password"
                className={`form-control ${inputs.basicLrg}`}
                name="password_1"
                value={this.state.pass1}
                onChange={this.onPass1Change}
                validations={[required]}
                placeholder={'Enter Password'}
              />
            </div>
            <div className="form-group">
              <Input
                type="password"
                className={`form-control ${inputs.basicLrg}`}
                name="password_2"
                value={this.state.pass2}
                onChange={this.onPass2Change}
                validations={[required]}
                placeholder={'Re-enter Password'}
              />
            </div>
            {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          </div>

          <MainBtn btnText={'Login'} />

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