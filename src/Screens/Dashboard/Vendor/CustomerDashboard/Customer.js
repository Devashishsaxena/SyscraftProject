import Sidebar from "src/Screens/Dashboard/Customer/Components/Sidebar/Sidebar";
import "src/Screens/Dashboard/Customer/Customer.scss";
import Widget from "src/Screens/Dashboard/Components/Widget/Widget";
import Featured from "src/Screens/Dashboard/Components/Featured/Featured";
import Chart from "src/Screens/Dashboard/Components/Chart/Chart";
import Table from "src/Screens/Dashboard/Components/Table/Table";
import Title from "src/Screens/Dashboard/Components/Title_text/Title";
import Wrapper from "src/Utlilities/Wrapper";

const wrapperHeight = "11vh";
const Customer = () => {
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <div className="customer">
        <Sidebar />

        <div className="customerContainer">
          <Title />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>

          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
          {/* <div>
          <button onClick={() => updateToken("satyam_we are good")}>
            Auth Update
          </button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Customer;
