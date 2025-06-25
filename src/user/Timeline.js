import React, { useEffect, useState } from "react";
import axios from "axios";

const Timeline = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
   
axios.get("http://localhost:5000/api/notifications/active")
  .then((res) => setNotifications(res.data))
  .catch((err) => console.error("Error fetching notifications:", err));

  }, []);

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="title">
                  <h4>Timeline</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/user/dashboard">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      UI Timeline
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="container pd-0">
            <div className="timeline mb-30">
              <ul>
                {notifications.length === 0 ? (
                  <li>
                    <div className="timeline-date">No notifications</div>
                    <div className="timeline-desc card-box">
                      <div className="pd-20">No notifications found.</div>
                    </div>
                  </li>
                ) : (
                  notifications.map((notification) => (
                    <li key={notification.id}>
                      <div className="timeline-date">
                        {new Date(notification.created_at).toLocaleString()}
                      </div>
                      <div className="timeline-desc card-box">
                        <div className="pd-20">
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                           {notification.content}
                             </pre>


                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
