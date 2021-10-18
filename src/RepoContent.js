import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import DirLogo from "./asset/folder.png";
import FileLogo from "./asset/file.png";
let Icon = ({ type }) => {
  if (type === "file") {
    return (
      <div className="p-1">
        <img src={FileLogo} alt="file"></img>
      </div>
    );
  } else
    return (
      <div className="p-1">
        <img src={DirLogo} alt="folder"></img>
      </div>
    );
};
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
      <div className="text-3xl">content</div>
      {!isPending &&
        data.map((element, i) => (
          <a href={urlToGithub + "/" + element.path}>
            <div className="hover:text-red-500 border-2 p-2 m-1 rounded-lg flex flex-row ">
              {console.log(element)}
              <Icon type={element.type}></Icon>
              <div className="self-center">{element.name}</div>
            </div>
          </a>
        ))}
    </div>
  );
};

export default RepoContent;
