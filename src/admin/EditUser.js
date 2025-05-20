import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Admin.css";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/admin/users/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
        } else {
          alert("User not found");
          navigate("/user/dashboard");
        }
      })
      .catch(err => console.error(err));
  }, [id, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/admin/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("User updated successfully");
          navigate("/admin/users");
        } else {
          alert("Update failed");
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="admin-page">
      <div className="edit-user-card">
        <h2 className="edit-user-heading">Edit User Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="form-button">Update</button>
        </form>
      </div>
    </div>
  );
}



export default EditUser;
