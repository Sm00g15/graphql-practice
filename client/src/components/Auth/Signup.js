import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(data => {
      console.log(data);
    });
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <div className="App container">
        <h2>Signup</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            return (
              <form
                action=""
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    placeholder="Confirm Password"
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-primary">
                  Submit
                </button>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
