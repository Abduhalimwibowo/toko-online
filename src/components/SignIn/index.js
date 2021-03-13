import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/util";
import AuthWrapper from "../AuthWrapper";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";
import "./styles.scss";

// const initialState = {
//   email: "",
//   password: "",
// };

const SignIn = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...iintialState,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  // handleChange(e) {
  //   const { name, value } = e.target;
  //   // set statate krn nanti value name brh2
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle emial dan pass login
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (error) {
      //eror
    }
  };

  const configAuthWrapper = {
    headline: "LogIn",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="signin">
        <div className="wrap">
          <div className="formWrap">
            <form onSubmit={handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                handleChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                handleChange={(e) => setPassword(e.target.value)}
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
    </AuthWrapper>
  );
};

export default withRouter(SignIn);
