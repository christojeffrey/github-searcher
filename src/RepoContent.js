import useFetch from "./useFetch";
import { Link } from "react-router-dom";

let RepoContent = ({ username, repo }) => {
  let url = "https://api.github.com/repos/" + username + "/" + repo + "/contents";
  console.log(url);
  let { data, isPending, Error } = useFetch(url);
  if (!isPending) {
    console.log("repo content " + typeof data);
    console.log(data);
  }
  let urlToGithub = "https://github.com/" + username + "/" + repo + "/tree/master";
  return (
    <div>
      <h1>this is repo content</h1>
      <ul>
        {!isPending &&
          data.map((element, i) => (
            <div>
              <a href={urlToGithub + "/" + element.path}>{element.name}</a>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RepoContent;
