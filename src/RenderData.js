import { Link } from "react-router-dom";
let renderData = ({ datum }) => {
  return (
    <Link to={"/repo/" + datum.full_name}>
      <div className="p-4 text-left shadow-sm bg-gray-500 hover:bg-black my-1 font-medium text-xl w-1/2 rounded-md">{datum.full_name}</div>
    </Link>
  );
};

export default renderData;
