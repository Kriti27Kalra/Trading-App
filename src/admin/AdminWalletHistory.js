import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/Admin/DynamicTable'; // Or reuse from user if it's generic

const AdminWalletHistory = () => {
  const [walletHistory, setWalletHistory] = useState([]);

  const columns = [
    { label: 'Date', accessor: 'date' },
    { label: 'Time', accessor: 'time' },
    { label: 'Type', accessor: 'type' },
    { label: 'Amount', accessor: 'amount' },
    { label: 'To ID', accessor: 'to_refer_code' }
  ];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/wallet/admin-history`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then(data => {
        const formatted = data.map(item => {
          const d = new Date(item.created_at);
          return {
            ...item,
            date: d.toISOString().slice(0, 10),
            time: d.toTimeString().slice(0, 8),
            to_refer_code: item.to_refer_code || 'Unknown',
          };
        });
        setWalletHistory(formatted);
      })
      .catch(err => console.error("Failed to load admin wallet history", err));
  }, []);

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>Admin Wallet History</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/admin/dashboard" className="text-dark" style={{ fontWeight: '400' }}>Dashboard</a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Wallet History</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="pd-20 card-box mb-30">
            <div className="clearfix mb-20">
              <div className="pull-left">
                <h4 className="text-primary h4">Admin Transaction Log</h4>
                <p>This table shows all transactions made by admin to users.</p>
              </div>
            </div>

            <DynamicTable columns={columns} data={walletHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWalletHistory;
