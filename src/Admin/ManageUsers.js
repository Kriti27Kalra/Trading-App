import React from "react";

const ManageUsers = () => {
  // Sample static data; replace with API data later
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "User" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Admin" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
  ];

  return (
    <div>
      <h2 className="mb-4">Manage Users</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
