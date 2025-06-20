import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicCard from '../components/User/DynamicCard';

const UserCards = ({ referCode }) => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const actualReferCode = referCode || user?.refer_code;

  const [teamCount, setTeamCount] = useState(0);
  const [walletAmount, setWalletAmount] = useState(0);

  useEffect(() => {
    if (!actualReferCode) return;

    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/team-count/${actualReferCode}`)
      .then((res) => {
        if (res.data.success) {
          setTeamCount(res.data.teamCount);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch team count:", err);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/wallet/balance/${actualReferCode}`)
      .then((res) => {
        if (res.data.wallet !== undefined) {
          setWalletAmount(Number(res.data.wallet));
        }
      })
      .catch((err) => {
        console.error("Failed to fetch wallet amount:", err);
      });
  }, [actualReferCode]);

  const cardData = [
    {
      chartId: null,
      value: `₹${walletAmount.toFixed(2)}`,
      label: 'Wallet',
      isLink: true,
      link: '/user/wallethistory',
    },
    { chartId: 'chart4', value: '$6060', label: 'Worth' },
    {
      chartId: null,
      value: actualReferCode || 'No ID yet',
      label: 'My Referral Code',
    },
    {
      chartId: null,
      value: teamCount,
      label: 'My Team',
      isLink: true,
      link: '/user/teamtable',
    },
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
