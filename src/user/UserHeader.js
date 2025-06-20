import React, { useState, useEffect } from 'react'; 
function UserHeader() {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user?.name || "User");
  }, []);
   return (
 <div>
 
 <div className="header">
  
          <div className="header-left">
            
            <div className="menu-icon dw dw-menu" />
            
             <div> 
            </div> 
          </div>
          <div className="header-right">
            <div className="dashboard-setting user-notification">
              <div className="dropdown">
              </div>
            </div>
            <div className="user-notification">
              <div className="dropdown">
                <a className="dropdown-toggle no-arrow" href="/user/timeline" role="button">
                  <i className="icon-copy dw dw-notification" />
                  <span className="badge notification-active" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="notification-list mx-h-350 customscroll">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="user-info-dropdown">
              <div className="dropdown">
                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                  <span className="user-icon">
                    <img src="/vendors/images/photo1.jpg" alt="" />
                  </span>
                   <span
                      className="user-name font-weight-bold text-primary text-capitalize"
                      style={{ fontSize: "16px", marginLeft: "5px" }}
                          >
                             {username}
                    </span>
                   </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                  <a className="dropdown-item" href="#"><i className="dw dw-user1" /> Profile</a>
                  <a className="dropdown-item" href="#"><i className="dw dw-settings2" /> Setting</a>
                  <a className="dropdown-item" href="#"><i className="dw dw-help" /> Help</a>
                  <a className="dropdown-item" href="#"><i className="dw dw-logout" /> Log Out</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
       
            </div>
          
        
        

        
        );
}

export default UserHeader;
