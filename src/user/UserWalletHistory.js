import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/User/DynamicTable';

const UserWalletHistory = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [walletHistory, setWalletHistory] = useState([]);

  const columns = [
  { label: 'From ID', accessor: 'from_refer_code' },
  { label: 'To ID', accessor: 'to_refer_code' },
  { label: 'Amount', accessor: 'amount' },
  { label: 'Type', accessor: 'type' },
  { label: 'Date', accessor: 'date' },
  { label: 'Time', accessor: 'time' }
];



  useEffect(() => {
  if (user?.refer_code) {
    const encodedReferCode = encodeURIComponent(user.refer_code); 
fetch(`${process.env.REACT_APP_API_URL}/wallet/history/${encodedReferCode}`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
     .then(data => {
 const formattedData = data.map(item => {
  const d = new Date(item.created_at);
  const isReward = item.type === 'reward' || item.from === 'system';

  return {
    ...item,
    date: d.toISOString().slice(0, 10),
    time: d.toTimeString().slice(0, 8),
    amount: `$${parseFloat(item.amount).toFixed(2)}`,
    type: isReward ? 'Reward' : item.type,
   from_refer_code: item.from === 'system'
  ? `${item.trigger_user_code || 'N/A'} (ID: ${item.from_user_id || 'N/A'})`
  : (item.from === 'admin'
      ? 'Admin'
      : `${item.from || 'N/A'} (ID: ${item.from_user_id || 'N/A'})`),

    to_refer_code: item.to_refer_code || 'N/A',

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
