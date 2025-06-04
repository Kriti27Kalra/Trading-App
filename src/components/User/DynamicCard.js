import React from 'react';
import { Link } from 'react-router-dom';

const DynamicCard = ({ chartId, value, label, isLink, link }) => {
  const content = (
    <>
      <div className="h4 mb-0">{value}</div>
      <div className="weight-600 font-14">{label}</div>
    </>
  );

  return (
    <div className="col-xl-3 mb-30">
      <div className="card-box height-100-p widget-style1 d-flex justify-content-center align-items-center text-center">
        <div>
          {chartId && <div id={chartId} className="mb-2" />}
          {isLink ? <Link to={link} className="text-dark text-decoration-none">{content}</Link> : content}
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
