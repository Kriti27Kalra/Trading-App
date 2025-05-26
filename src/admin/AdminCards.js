import React from 'react';
import DynamicCard from '../components/Admin/DynamicCard'

const AdminCards = ({ userCount }) => {
  const cardData = [
    { chartId: 'chart', value: userCount, label: 'Users' },
    { chartId: 'chart2', value: 400, label: 'Deals' },
    { chartId: 'chart3', value: 350, label: 'Campaign' },
    { chartId: 'chart4', value: '$6060', label: 'Worth' },

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

export default AdminCards;
