import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class LoginForm extends React.Component {
  state = {
      username: "",
      password: ""
  };

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login: ", err);
        window.alert("That login isn't right!");
      });
  };

  render() {
    return (

      <form onSubmit={this.login}>
        <div className="login-form">
          <div className="login-inputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button>Log In</button>
        </div>
      </form>

    );
  }
}

export default LoginForm