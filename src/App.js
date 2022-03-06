import React, { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

export default () => {
  const [datas, setDatas] = useState([]);
  const options = {
    filterType: 'checkbox',
  };

  const columns = [
    "SrNo",
    "P_ID",
    "Deli",
    "Expense_Fees",
    "C_Name",
    "T_Name",
    "Create_Date",
    "Update_Date",
  ];

  const fetchDatas = async () => {
    try {
      const res = await axios.get(
        "https://7daysdeliveryapi.nksoftwarehouse.com/api/data/price",
        {
          params: {
            Business_Name: "7DayDelivery",
          },
        }
      );
      setDatas(res.data);
    } catch (err) {}
  };

  useEffect(fetchDatas, [axios]);

  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={datas}
        columns={columns}
        options={options}
      />
    </div>
  );
};
