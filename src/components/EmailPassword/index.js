import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/util";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";

const initialState = {
  email: "",
  errors: [],
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email } = this.state;
      const config = {
        url: "http://localhost:3000/login",
      };
      // kirim reset pass k email
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email Not Found"];
          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, errors } = this.state;

    return (
      <div className="formWrap">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            handleChange={this.handleChange}
          />
          <Button type="submit">Reset Pass</Button>
        </form>
      </div>
    );
  }
}
export default withRouter(EmailPassword);
