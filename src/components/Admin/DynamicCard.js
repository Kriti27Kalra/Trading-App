import React from 'react';

const DynamicCard = ({ chartId, value, label }) => {
  return (
    <div className="col-xl-3 mb-30">
      <div className="card-box height-100-p widget-style1">
        <div className="d-flex flex-wrap align-items-center">
          <div className="progress-data">
            {chartId && <div id={chartId} />}
          </div>
          <div className="widget-data">
            <div className="h4 mb-0">{value}</div>
            <div className="weight-600 font-14">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
