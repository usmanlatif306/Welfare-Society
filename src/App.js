import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <DataProvider>
            <Switch>
              <Route
                path="/"
                name="Home"
                render={(props) => <TheLayout {...props} />}
              />
            </Switch>
          </DataProvider>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
