import { Link } from "react-router-dom";
import StarLogo from "./asset/star.png";
let renderData = ({ datum }) => {
  return (
    <Link to={"/repo/" + datum.full_name}>
      <div className="m-4  text-left shadow-sm border-b font-medium text-xl w-1/2">
        <div className="hover:text-red-500">{datum.full_name}</div>
        <div className="text-sm">{datum.description}</div>
        <div className="text-sm text-red-500">{datum.language}</div>
        <div className="text-sm flex items-center">
          <img className="m-1" src={StarLogo} width="2%"></img>
          {datum.stargazers_count}
        </div>
        {/* {console.log(datum)} */}
      </div>
    </Link>
  );
};

export default renderData;
