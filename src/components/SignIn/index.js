import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/util";
import Button from "../forms/Button";
import "./styles.scss";

class SignIn extends Component {
  handleSumbit = async (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="signin">
        <div className="wrap">
          <h2>Login</h2>
          <div className="formWrap">
            <form onSubmit={this.handleSumbit}>
              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign In With Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
