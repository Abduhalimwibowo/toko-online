import "./App.css";
//import Login from "./Login";
import { auth, handleUserProfile, signInWithGoogle } from "./firebase/util";
import { Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import { render } from "@testing-library/react";
import { Component } from "react";
import HomepageLayout from "./layouts/HomepageLayout";
import "./default.scss";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Recovery from "./pages/Recovery";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { setCurrentUser } from "./redux/User/user.action";
import React, { useEffect } from "react";
import WithAuth from "./hoc/withAuth";
import Dashboard from "./pages/Dashboard";

const App = (props) => {
  //listenr
  const { setCurrentUser, currentUser } = props;

  // useEffect
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      // cek user
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
    return () => {
      authListener();
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
