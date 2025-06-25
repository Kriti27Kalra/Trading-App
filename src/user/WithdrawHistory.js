import React, { useEffect, useState } from "react";
import DynamicTable from "../components/User/DynamicTable";

const WithdrawHistory = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [history, setHistory] = useState([]);

  const columns = [
    { label: "Amount", accessor: "amount" },
    { label: "Status", accessor: "status" },
    { label: "Date", accessor: "date" },
    { label: "Time", accessor: "time" },
  ];

  useEffect(() => {
    if (user?.id) {
      fetch(`${process.env.REACT_APP_API_URL}/withdraw/history/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.map(item => {
            const d = new Date(item.created_at);
            return {
              ...item,
              date: d.toISOString().split("T")[0],
              time: d.toTimeString().slice(0, 8),
              amount: `$${parseFloat(item.amount).toFixed(2)}`
            };
          });
          setHistory(formatted);
        });
    }
  }, [user?.id]);

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="title">
              <h4>Withdraw History</h4>
            </div>
          </div>
          <div className="pd-20 card-box mb-30">
            <h4 className="text-primary h4 mb-3">Your Withdrawal Requests</h4>
            <DynamicTable columns={columns} data={history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
