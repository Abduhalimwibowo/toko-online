import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/util";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";

const initialState = {
  email: "",
  errors: [],
};

const EmailPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
          setErrors(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="formWrap">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          placeholder="Enter Email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Reset Pass</Button>
      </form>
    </div>
  );
};
export default withRouter(EmailPassword);
