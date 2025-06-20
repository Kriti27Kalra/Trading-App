import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicTable from "../components/Admin/DynamicTable";

const EditAlertList = () => {
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/alerts")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(alert => {
          const date = new Date(alert.created_at);
          return {
            ...alert,
            date: date.toISOString().slice(0, 10),
            time: date.toTimeString().slice(0, 8),
            actions: (
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => navigate(`/admin/edit-alert/${alert.id}`)}
              >
                Edit
              </button>
            ),
          };
        });
        setAlerts(formatted);
      });
  }, []);

  const columns = [
    { label: "Date", accessor: "date" },
    { label: "Time", accessor: "time" },
    { label: "Content", accessor: "content" },
    { label: "Action", accessor: "actions" },
  ];

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="title">
              <h4>Edit Alerts</h4>
            </div>
          </div>
          <div className="pd-20 card-box mb-30">
            <h4 className="text-blue h4">Select an Alert to Edit</h4>
            <DynamicTable columns={columns} data={alerts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAlertList;
