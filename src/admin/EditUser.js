import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
          navigate("/admin/users");
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
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Edit User Profile</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroup}>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroup}>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroup}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Update</button>
        </form>
      </div>
    </div>
  );
}

// Styles
const pageStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa"
};

const cardStyle = {
  background: "#ffffff",
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "500px",
  maxHeight: "450px", 
  overflowY: "auto", 
};

const headingStyle = {
  fontSize: "24px",
  marginBottom: "25px",
  textAlign: "center",
  color: "#333"
};

const formGroup = {
  marginBottom: "20px"
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  color: "#444"
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default EditUser;
