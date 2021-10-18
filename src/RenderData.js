import { Link } from "react-router-dom";
let renderData = ({ datum }) => {
  return (
    <Link to={"/repo/" + datum.full_name}>
      <div className="p-4 text-left shadow-sm border-b hover:text-red-400 my-1 font-medium text-xl w-1/2">
        <div>{datum.full_name}</div>
        <div className="text-sm">{datum.description}</div>
        <div className="text-sm text-red-500">{datum.language}</div>
        <div className="text-sm"> star:{datum.stargazers_count}</div>
        {console.log(datum)}
      </div>
    </Link>
  );
};

export default renderData;
