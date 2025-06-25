import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/Admin/DynamicTable';
import axios from 'axios';

const AdminNotificationHistory = () => {
  const [notificationHistory, setNotificationHistory] = useState([]);

  const columns = [
    { label: 'Date', accessor: 'date' },
    { label: 'Time', accessor: 'time' },
    { label: 'Content', accessor: 'content' }
  ];

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/notifications`)
      .then(res => {
        const formatted = res.data.map(item => {
          const d = new Date(item.created_at);
          return {
            ...item,
            date: d.toISOString().slice(0, 10),
            time: d.toTimeString().slice(0, 8),
          };
        });
        setNotificationHistory(formatted);
      })
      .catch(err => console.error("Failed to load notification history", err));
  }, []);

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>Admin Notification History</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/admin/dashboard" className="text-dark" style={{ fontWeight: '400' }}>Dashboard</a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Notification History</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="pd-20 card-box mb-30">
            <div className="clearfix mb-20">
              <div className="pull-left">
                <h4 className="text-primary h4">Notification Log</h4>
                <p>This table shows all notifications created by the admin.</p>
              </div>
            </div>

            <DynamicTable columns={columns} data={notificationHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotificationHistory;
