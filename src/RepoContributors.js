import useFetch from "./useFetch";

let RepoContributors = ({ url }) => {
  //   console.log("this is contributors data");
  let { data, isPending } = useFetch(url + "/contributors");
  //   console.log(url + "/contributors");
  //   console.log(data);
  return (
    <div>
      <ul>{!isPending && data.map((element, i) => <li>{element.login}</li>)}</ul>
    </div>
  );
};
export default RepoContributors;
