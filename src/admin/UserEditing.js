import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DynamicForm from "../components/Admin/DynamicForm"; 
import AlertMessage from "../components/Admin/AlertMessage";

function UserEditing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
const [alertMessage, setAlertMessage] = useState(null);

  const fields = [
    { name: "first_name", label: "First Name", type: "text", placeholder: "Enter first name" },
    { name: "last_name", label: "Last Name", type: "text", placeholder: "Enter last name" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter email" }
  ];

  useEffect(() => {
    fetch(`http://localhost:5000/api/admin/userslist/userediting/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setInitialValues(data.user);
        } else {
          alert("User not found");
          navigate("/admin/userslist");
        }
      })
      .catch(err => console.error(err));
  }, [id, navigate]);

 const handleSubmit = (formData) => {
  fetch(`http://localhost:5000/api/admin/userslist/userediting/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setAlertMessage({ type: "success", message: "User updated successfully" });
        setTimeout(() => navigate("/admin/userslist") ,4000);
      } else {
        setAlertMessage({ type: "error", message: "Update failed" });
      }
    })
    .catch(err => {
      console.error(err);
      setAlertMessage({ type: "error", message: "An error occurred." });
    });
};


  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>User Editing</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">User Edit</li>
                  </ol>
                </nav>
              </div>
              <div className="col-md-6 col-sm-12 text-right">
                <div className="dropdown">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    January 2018
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Export List</a>
                    <a className="dropdown-item" href="#">Policies</a>
                    <a className="dropdown-item" href="#">View Assets</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd-20 card-box mb-30">
            <div className="clearfix mb-2">
              <div className="pull-left">
                <h4 className="text-primary h4">User Edit</h4>
                <p className="mb-30">Form made using DynamicForm</p>
              </div>
              <div className="pull-right">
                <a href="#basic-form1" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button">
                  <i className="fa fa-code"></i> Source Code
                </a>
              </div>
            </div>

            {/* Alert Message */}
            {alertMessage && (
  <AlertMessage type={alertMessage.type} message={alertMessage.message} />
)}


            {/* Dynamic Form */}
            {initialValues ? (
              <DynamicForm
                fields={fields}
                initialValues={initialValues}
                onSubmit={handleSubmit}
              />
            ) : (
              <p>Loading form data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEditing;
