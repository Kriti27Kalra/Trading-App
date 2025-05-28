import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicTable from '../components/User/DynamicTable';

const TeamTable = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const columns = [
    { label: 'ID', accessor: 'id' },
    { label: 'First Name', accessor: 'first_name' },
    { label: 'Last Name', accessor: 'last_name' },
    { label: 'Email', accessor: 'email' },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.refer_code) {
    axios.get(`${process.env.REACT_APP_API_URL}/team/${user.refer_code}`)         
    .then(res => {
          if (res.data.success) {
            setTeamMembers(res.data.data);
          }
        })
        .catch(err => console.error('Error fetching team:', err));
    }
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
             <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>First Level Team</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                      </li>
                      <li className="breadcrumb-item text-primary active" aria-current="page">First Level Team</li>
                    </ol>
                  </nav>
                </div>
               
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="clearfix mb-20">
                <div className="pull-left">
                  <h4 className="text-primary h4">First Level Team</h4>
                  <p>This table shows users who signed up using your referral code.</p>
                </div>
              </div>
              <DynamicTable columns={columns} data={teamMembers} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTable;
