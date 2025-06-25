import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicTable from "../components/Admin/DynamicTable";

const EditNotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/notifications")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(notification => {
          const date = new Date(notification.created_at);
          return {
            ...notification,
            date: date.toISOString().slice(0, 10),
            time: date.toTimeString().slice(0, 8),
            actions: (
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => navigate(`/admin/edit-notification/${notification.id}`)}
              >
                Edit
              </button>
            ),
          };
        });
        setNotifications(formatted);
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
              <h4>Edit Notifications</h4>
            </div>
          </div>
          <div className="pd-20 card-box mb-30">
            <h4 className="text-blue h4">Select a Notification to Edit</h4>
            <DynamicTable columns={columns} data={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNotificationList;
