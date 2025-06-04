import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/User/DynamicTable';

const UserWalletHistory = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [walletHistory, setWalletHistory] = useState([]);

  const columns = [
  { label: 'Date', accessor: 'date' },
  { label: 'Time', accessor: 'time' },
  { label: 'Type', accessor: 'type' },
  { label: 'Amount', accessor: 'amount' },
  { label: 'From ID', accessor: 'from_refer_code' },
  { label: 'To ID', accessor: 'to_refer_code' }
];


  useEffect(() => {
  if (user?.refer_code) {
    const encodedReferCode = encodeURIComponent(user.refer_code); // encode colon and special chars
fetch(`${process.env.REACT_APP_API_URL}/wallet/history/${encodedReferCode}`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
     .then(data => {
  console.log('Raw wallet history data:', data);  // <-- Add this to inspect data
  const formattedData = data.map(item => {
    const d = new Date(item.created_at);
    return {
      ...item,
      date: d.toISOString().slice(0, 10),
      time: d.toTimeString().slice(0, 8),
      from_refer_code: (item.from === 'admin' || item.from_refer_code === null) ? 'Admin' : item.from_refer_code,
      to_refer_code: (item.to === 'admin' || item.to_refer_code === null) ? 'Admin' : item.to_refer_code,
    };
  });
  setWalletHistory(formattedData);
})

    
      .catch(err => console.error("Failed to load wallet history", err));
  }
}, [user?.refer_code]);

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>Wallet History</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
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
                <h4 className="text-primary h4">Wallet History</h4>
                <p>This table shows your wallet transaction history.</p>
              </div>
            </div>
            <DynamicTable columns={columns} data={walletHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWalletHistory;
