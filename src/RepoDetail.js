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
  // console.log(data);
  let location = useLocation();
  // console.log("location " + location.pathname);
  if (isPending) {
    return <div>loading...</div>;
  } else
    return (
      <div className="flex flex-col">
        <div className="text-5xl p-4">{username + "/" + repo}</div>
        <div className="flex p-4">
          <div classname="LeftPanel ">
            <div className="directory border-2 p-4 m-2 rounded-lg">
              <RepoContent username={username} repo={repo} />
            </div>
            <div className="readme border-2 p-4 m-2 mt-4 rounded-lg">
              <RepoReadme url={url} />
            </div>
          </div>
          <div className="RightPanel w-2/3">
            {console.log(data)}
            <div className="text-m RepoAbout border-b-2 p-4 m-2">{!isPending && data.description}</div>
            <div className="contributors border-b-2 p-4 m-2">
              <div className="text-2xl">contributors</div>
              {/* {console.log(url)} */}
              <RepoContributors url={url} />
            </div>
          </div>
        </div>
      </div>
    );
};
export default RepoDetail;
