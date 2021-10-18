import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import RepoContributors from "./RepoContributors";
import RepoReadme from "./RepoReadme";
import RepoContent from "./RepoContent";

let RepoDetail = () => {
  let { username, repo } = useParams();
  let url = "https://api.github.com/repos/";
  url = url + username + "/" + repo;
  let { data, isPending } = useFetch(url);
  // console.log(data);
  // console.log("location " + location.pathname);
  if (isPending) {
    return <div className="text-3xl p-5">loading...</div>;
  } else
    return (
      <div className="flex flex-col">
        <div className="text-3xl m-3 ml-10">
          <a href={"https://github.com/" + username} className="hover:text-red-500">
            {username}
          </a>
          <span className="text-red-500"> / </span>
          <a href={"https://github.com/" + username + "/" + repo} className="hover:text-red-500">
            {repo}
          </a>
        </div>
        <div className="flex flex-row p-4 justify-evenly">
          <div className="LeftPanel w-2/3">
            <div className="directory border-2 p-4 m-2 rounded-lg">
              <RepoContent username={username} repo={repo} />
            </div>
            <div className="readme border-2 p-4 m-2 mt-4 rounded-lg">
              <RepoReadme url={url} />
            </div>
          </div>
          <div className="RightPanel  w-1/3 flex-shrink">
            {/* {console.log(data)} */}
            <div className="text-m RepoAbout border-b-2  m-4">
              <div className="text-2xl">About</div>
              {!isPending && data.description}
            </div>
            <div className="contributors border-b-2  m-4">
              <div className="text-2xl">Contributors</div>
              {/* {console.log(url)} */}
              <RepoContributors url={url} />
            </div>
          </div>
        </div>
      </div>
    );
};
export default RepoDetail;
