import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Registered Users</h2>
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>First Name</th>
                <th style={thStyle}>Last Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={tdStyle}>{user.id}</td>
                  <td style={tdStyle}>{user.first_name}</td>
                  <td style={tdStyle}>{user.last_name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>
                    <Link to={`/admin/users/edit/${user.id}`} style={linkStyle}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Add link style
const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "500",
};

// Reuse your styles from before
const pageStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

const cardStyle = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  maxWidth: "900px",
  width: "100%",
};

const headingStyle = {
  fontSize: "26px",
  marginBottom: "20px",
  textAlign: "center",
  color: "#333",
};

const tableContainerStyle = {
  maxHeight: "300px",
  overflowY: "auto",
  borderRadius: "8px",
  border: "1px solid #dee2e6",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "600px",
};

const thStyle = {
  backgroundColor: "#343a40",
  color: "#ffffff",
  padding: "12px",
  textAlign: "left",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #dee2e6",
  backgroundColor: "#fff",
};

export default AdminUsers;
