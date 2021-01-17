import "./App.css";
//import Login from "./Login";
import { signInWithGoogle } from "./firebase/util";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import { render } from "@testing-library/react";
import { Component } from "react";
import HomepageLayout from "./layouts/HomepageLayout";
import "./default.scss";
import Login from "./pages/Login";
class App extends Component {
  render() {
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
            render={() => <MainLayout></MainLayout>}
          />
          <Route
            path="/login"
            render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
