import React from "react";
import DetailsScreen from "./pages/DetailsScreen";
import HomeScreen from "./pages/HomeScreen";

import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

        <Route exact path="/articles/:id" component={DetailsScreen} />
      </Switch>
    </div>
  );
}

export default App;
