import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DynamicCard from '../components/Admin/DynamicCard';

const AdminCards = ({ userCount }) => {
  const [totalWallet, setTotalWallet] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);

  useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/wallet/total-wallet`)
    .then((res) => {
      console.log('total-wallet response:', res.data);  
      if (res.data.success) {
        setTotalWallet(Number(res.data.totalWallet));
      } else if (res.data.totalWallet !== undefined) {
        setTotalWallet(Number(res.data.totalWallet));
      } else if (res.data.total_wallet !== undefined) {
        setTotalWallet(Number(res.data.total_wallet));
      }
    })
    .catch((err) => {
      console.error('Failed to fetch total wallet balance:', err);
    });

  axios.get(`${process.env.REACT_APP_API_URL}/status-counts`)
    .then((res) => {
      if (res.data.success) {
        setActiveCount(res.data.activeCount);
        setInactiveCount(res.data.inactiveCount);
      }
    })
    .catch((err) => {
      console.error('Failed to fetch user status counts:', err);
    });
}, []);

  const cardData = [
  { chartId: 'chart', value: userCount, label: 'Total Users' },
  { chartId: 'chart2', value: `₹${totalWallet.toFixed(2)}`, label: 'Total Wallet Balance' },
  { chartId: 'chart3', value: activeCount, label: 'Active Users', isLink: true,  link: '/admin/userslist' },
  { chartId: 'chart4', value: inactiveCount, label: 'Inactive Users', isLink: true,  link: '/admin/userslist' },
];


  return (
    <div className="row">
      {cardData.map((card, index) => (
        <DynamicCard
          key={index}
          chartId={card.chartId}
          value={card.value}
          label={card.label}
          isLink={card.isLink}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default AdminCards;
