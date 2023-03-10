import "./chart.scss";
import BasicTable from "../../component/table/Table";

import Sidebar from "../../component/sidebar/Sidebar";
import Album from "../../component/album/Album";
const Chart = () => {
  return (
    <div className="container">
      <Sidebar />
      <Album />
      <div className="table">
        <BasicTable />
      </div>
    </div>
  );
};

export default Chart;
