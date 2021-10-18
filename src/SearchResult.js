import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import RenderData from "./RenderData";
// import { BrowserRouter as Route, Router, Link } from "react-router-dom";

let SearchResult = () => {
  const { id } = useParams();
  const queryString = "?q=" + encodeURIComponent(id);
  // console.log(queryString)
  const url = "https://api.github.com/search/repositories";
  const { data, isPending, Error } = useFetch(url + queryString);
  if (isPending) {
    return (
      <div>
        <h1>pending</h1>
      </div>
    );
  } else {
    if (Error) {
      return (
        <div>
          <h1>error</h1>
        </div>
      );
    } else {
      // console.log(data.items);
      return (
        <div className="flex-col ml-8">
          <p className="text-3xl m-3">search result for {id}</p>
          {data.items.map((element, i) => (
            <RenderData datum={element} key={i} />
          ))}
        </div>
      );
    }
  }
};
// class SearchResult extends react.Component {
//   render() {
//     const { id } = useParams();
//     console.log(id);
//     return (
//       <div>
//         <h1>this is the search result page</h1>
//         <p>this is what you search {id}</p>
//       </div>
//     );
//   }
// } gabisa pake ini soalnya useParams itu hook, dan itu harus dipake dalem class. "but bisa ...", ya mungkin ada cara lain but yaudah lah for now function dulu
export default SearchResult;
