import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/util";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";
import "./styles.scss";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    // set statate krn nanti value name brh2
    this.setState({
      [name]: value,
    });
  }

  handleSumbit = async (e) => {
    e.preventDefault();

    // handle emial dan pass login
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (error) {
      //eror
    }
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="signin">
        <div className="wrap">
          <h2>Login</h2>
          <div className="formWrap">
            <form onSubmit={this.handleSumbit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                handleChange={this.handleChange}
              />
              <Button type="submit">Log in</Button>

              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign In With Google
                  </Button>
                </div>
              </div>

              <div className="links">
                <Link to="/recovery">Reset Password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
