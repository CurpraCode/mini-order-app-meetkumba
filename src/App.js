import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import SummaryPage from "./components/SummaryPage";
import "./App.css";

function App() {
  return (
  
      <Router>
        <>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ProfilePage} />
              <Route exact path="/SummaryPage/" component={SummaryPage} />
            </Switch>
          </div>
        </>
      </Router>

  );
}

export default App;
