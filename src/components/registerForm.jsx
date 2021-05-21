import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().required()
  };

  doSubmit = () => {
    console.log("Registered");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "E-mail", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
