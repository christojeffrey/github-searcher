import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import RaQ from "./RaQ";
import About from "./About";
import SearchResult from "./SearchResult";
import RepoDetail from "./RepoDetail";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "github",
    };
  }
  setSearchQuery(a) {
    this.setState({ searchQuery: a });
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/search/:id">
              <SearchResult />
            </Route>
            <Route path="/repo/:username/:repo">
              <RepoDetail />
            </Route>
            <Route exact path="/RaQ">
              <RaQ />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/">
              <Home searchQuery={this.state.searchQuery} setSearchQuery={(a) => this.setSearchQuery(a)} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
