import React from 'react';
import DynamicCard from '../components/User/DynamicCard';
const UserCards = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const cardData = [
    { chartId: 'chart2', value: 400, label: 'Deals' },
    { chartId: 'chart3', value: 350, label: 'Campaign' },
    { chartId: 'chart4', value: '$6060', label: 'Worth' },
    { chartId: null, value: user.refer_code || 'No ID yet', label: 'My Referral Code' },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <DynamicCard
          key={index}
          chartId={card.chartId}
          value={card.value}
          label={card.label}
        />
      ))}
    </div>
  );
};

export default UserCards;
