import React, { useEffect, useState } from "react";
import DynamicTable from "../components/User/DynamicTable";

const AdminWithdrawRequests = () => {
  const [withdrawals, setWithdrawals] = useState([]);

  const fetchRequests = () => {
    fetch(`${process.env.REACT_APP_API_URL}/withdraw/admin/requests`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => {
          const d = new Date(item.created_at);
          return {
            id: item.id,
            user_id: item.refer_code || "N/A",
            amount: `$${parseFloat(item.amount).toFixed(2)}`,
            status: item.status,
            time: `${d.toISOString().split("T")[0]} ${d.toTimeString().slice(0, 8)}`,
            actions:
              item.status === "pending" ? (
                <>
                  <button
                    className="btn btn-sm btn-success mr-2"
                    onClick={() => handleAction(item.id, "approve")}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleAction(item.id, "reject")}
                  >
                    Reject
                  </button>
                </>
              ) : (
                <span className="text-muted">Completed</span>
              ),
          };
        });
        setWithdrawals(formatted);
      });
  };

  const handleAction = (id, action) => {
    fetch(`${process.env.REACT_APP_API_URL}/withdraw/admin/${action}/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then(() => fetchRequests())
      .catch((err) => console.error("Action failed", err));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const columns = [
    { label: "User ID", accessor: "user_id" },
    { label: "Amount", accessor: "amount" },
    { label: "Status", accessor: "status" },
    { label: "Time", accessor: "time" },
    { label: "Actions", accessor: "actions" },
  ];

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <h4>Withdrawal Requests</h4>
          </div>
          <div className="pd-20 card-box mb-30">
            <h4 className="text-primary h4 mb-3">Pending & Completed Withdrawals</h4>
            <DynamicTable columns={columns} data={withdrawals} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWithdrawRequests;
