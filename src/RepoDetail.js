import { useParams, useLocation } from "react-router-dom";
import useFetch from "./useFetch";
import "./css/RepoDetail.css";
import RepoContributors from "./RepoContributors";
import RepoReadme from "./RepoReadme";
import RepoContent from "./RepoContent";

let RepoDetail = () => {
  let { username, repo } = useParams();
  let url = "https://api.github.com/repos/";
  url = url + username + "/" + repo;
  let { data, isPending, Error } = useFetch(url);
  console.log(data);
  let location = useLocation();
  console.log("location " + location.pathname);
  return (
    <div>
      <h1>{username + "/" + repo}</h1>
      <div className="content">
        <div classname="LeftPanel">
          <div className="directory">
            this is directory
            <RepoContent username={username} repo={repo} />
          </div>
          <div className="readme">
            <RepoReadme url={url} />
          </div>
        </div>
        <div className="RightPanel">
          <div className="RepoAbout">this is repo about</div>
          <div className="contributors">
            this is contributors
            {/* {console.log(url)} */}
            <RepoContributors url={url} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RepoDetail;
