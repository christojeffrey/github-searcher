import { Link } from "react-router-dom";
let renderData = ({ datum }) => {
  return (
    <div className="data">
      <Link to={"/repo/" + datum.full_name}>{datum.full_name}</Link>
    </div>
  );
};

export default renderData;
