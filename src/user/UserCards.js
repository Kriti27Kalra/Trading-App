import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicCard from '../components/User/DynamicCard';

const UserCards = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null; // safe parsing
  const refer_code = user?.refer_code;

  const [teamCount, setTeamCount] = useState(0);
  const [walletAmount, setWalletAmount] = useState(0);

  useEffect(() => {
    if (!refer_code) return;  // exit early if no refer_code

    // Fetch team count
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/team-count/${refer_code}`)
      .then((res) => {
        if (res.data.success) {
          setTeamCount(res.data.teamCount);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch team count:", err);
      });

    // Fetch wallet amount
    axios
  .get(`${process.env.REACT_APP_API_URL}/wallet/balance/${refer_code}`)
  .then((res) => {
    // res.data = { wallet: <amount> }
    if (res.data.wallet !== undefined) {
      setWalletAmount(Number(res.data.wallet));
    }
  })
  .catch((err) => {
    console.error("Failed to fetch wallet amount:", err);
  });

  }, [refer_code]); // depend on stable string, not object property

  if (!user) {
    return <div>Please login first to view your dashboard.</div>;
  }

  const cardData = [
    {
      chartId: null,
      value: walletAmount ? `₹${walletAmount.toFixed(2)}` : 'Loading...',
      label: 'Wallet',
      isLink: true,
      link: '/user/wallethistory',
    },
    { chartId: 'chart4', value: '$6060', label: 'Worth' },
    { chartId: null, value: refer_code || 'No ID yet', label: 'My Referral Code' },
    { chartId: null, value: teamCount, label: 'My Team', isLink: true, link: '/user/teamtable' },
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

export default UserCards;
