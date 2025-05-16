import React, { useEffect } from 'react';

const Cards = () => {

  return (
    <div className="row">
      <div className="col-xl-3 mb-30">
        <div className="card-box height-100-p widget-style1">
          <div className="d-flex flex-wrap align-items-center">
            <div className="progress-data">
              <div id="chart" />
            </div>
            <div className="widget-data">
              <div className="h4 mb-0">2020</div>
              <div className="weight-600 font-14">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 mb-30">
        <div className="card-box height-100-p widget-style1">
          <div className="d-flex flex-wrap align-items-center">
            <div className="progress-data">
              <div id="chart2" />
            </div>
            <div className="widget-data">
              <div className="h4 mb-0">400</div>
              <div className="weight-600 font-14">Deals</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 mb-30">
        <div className="card-box height-100-p widget-style1">
          <div className="d-flex flex-wrap align-items-center">
            <div className="progress-data">
              <div id="chart3" />
            </div>
            <div className="widget-data">
              <div className="h4 mb-0">350</div>
              <div className="weight-600 font-14">Campaign</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 mb-30">
        <div className="card-box height-100-p widget-style1">
          <div className="d-flex flex-wrap align-items-center">
            <div className="progress-data">
              <div id="chart4" />
            </div>
            <div className="widget-data">
              <div className="h4 mb-0">$6060</div>
              <div className="weight-600 font-14">Worth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
