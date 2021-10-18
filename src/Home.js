import React from "react";
import { Link } from "react-router-dom";
import logo from "./asset/logo.png";
class Home extends React.Component {
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    // console.log(event.target);
  }
  render() {
    return (
      <div className="flex justify-between ml-8">
        <div className="self-center m-20 p-5 rounded-lg">
          <form autoComplete="off">
            <div>
              <label className="text-6xl flex-grow" for="search">
                search a repo
              </label>
            </div>
            <div className="border-b-2 pt-10 text-2xl ">
              <input
                className="appearance-none bg-transparent border-none focus:outline-none"
                placeholder="Jane Doe"
                type="text"
                id="search"
                name="search"
                value={this.props.searchQuery}
                onChange={(e) => this.props.setSearchQuery(e.target.value)}
              />
              <Link to={"search/" + this.props.searchQuery}>
                <button className="bg-transparent hover:text-red-500" type="submit" value="Submit" disabled={this.props.searchQuery === ""}>
                  submit
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="m-20 mt-10">
          <img src={logo} alt="logo" width="500px"></img>
        </div>
      </div>
    );
  }
}

export default Home;
