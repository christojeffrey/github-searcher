import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    console.log(event.target);
  }
  render() {
    return (
      <div>
        <h1>Search a repo</h1>
        <form>
          <div>
            <label for="search">search here</label>
          </div>
          <input type="text" id="search" name="search" value={this.props.searchQuery} onChange={(e) => this.props.setSearchQuery(e.target.value)} />
          <Link to={"search/" + this.props.searchQuery}>
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
