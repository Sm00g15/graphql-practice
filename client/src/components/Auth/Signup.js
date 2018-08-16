import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries";
import Error from "../Error";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class Signup extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(data => {
      console.log(data);
      localStorage.getItem("token", data.signupUser.token);
      this.clearState();
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;
    return isInvalid;
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
                <button
                  disabled={loading || this.validateForm()}
                  type="submit"
                  className="btn btn-lg btn-primary"
                >
                  Submit
                </button>
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
