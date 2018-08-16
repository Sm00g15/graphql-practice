import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";
import { withRouter } from "react-router-dom";
import Error from "../Error";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class Signin extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(async ({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.signinUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push("/");
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="App container">
        <h2>Signin</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signinUser, { data, loading, error }) => {
            return (
              <form
                action=""
                onSubmit={event => this.handleSubmit(event, signinUser)}
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
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                  />
                </div>
                <button
                  // disabled={loading || this.validateForm()}
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

export default withRouter(Signin);
