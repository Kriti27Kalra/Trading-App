import React, { useState, useEffect } from 'react';
import AlertMessage from '../components/User/AlertMessage';
import DynamicForm from '../components/User/DynamicForm';

const EditProfileForm = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser ? (storedUser.id || storedUser._id) : null;

  const [user, setUser] = useState(null); // initially null
  const [alertMessage, setAlertMessage] = useState('');

 useEffect(() => {
  if (storedUser) {
    const [first, ...rest] = storedUser.name.split(' ');
    setUser({
      first_name: first || '',
      last_name: rest.join(' ') || '',
      email: storedUser.email || '',
    });
  }
}, []);
  const profileFields = [
    { name: 'first_name', label: 'First Name', type: 'text', placeholder: 'John' },
    { name: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Doe' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
  ];

  const handleProfileSubmit = (formData) => {
    setAlertMessage(`Profile updated successfully:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          {/* header code... */}
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>Edit Profile</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Edit Profile</li>
                  </ol>
                </nav>
              </div>
              
            </div>
          </div>

          

          <div className="pd-20 card-box mb-30">
            <div className="clearfix">
              
            </div>

            <AlertMessage message={alertMessage} type="success" />

            {/* Render form only when user data is ready */}
            {user && (
              <DynamicForm
                fields={profileFields}
                initialValues={user}
                onSubmit={handleProfileSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default EditProfileForm;
