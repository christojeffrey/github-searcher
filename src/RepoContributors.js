import useFetch from "./useFetch";

let OneContributor = ({ element }) => {
  return (
    // <div className="flex flex-shrink">
    <a href={element.html_url} className="flex flex-shrink justify-center">
      <img className="rounded-full m-2 w-3/4" src={element.avatar_url}></img>
      {/* {console.log(element)} */}
    </a>
    // </div>
  );
};
let RepoContributors = ({ url }) => {
  //   console.log("this is contributors data");
  let { data, isPending } = useFetch(url + "/contributors");
  //   console.log(url + "/contributors");
  //   console.log(data);
  return <div className="grid grid-cols-6">{!isPending && data.map((element) => <OneContributor element={element} />)}</div>;
};
export default RepoContributors;
