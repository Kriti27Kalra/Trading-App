import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Admin.css";

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
    <div className="page-style">
      <div className="card-style">
        <h2 className="heading-style">Registered Users</h2>
        <div className="table-container-style">
          <table className="table-style">
            <thead>
              <tr>
                <th className="th-style">ID</th>
                <th className="th-style">First Name</th>
                <th className="th-style">Last Name</th>
                <th className="th-style">Email</th>
                <th className="th-style">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="td-style">{user.id}</td>
                  <td className="td-style">{user.first_name}</td>
                  <td className="td-style">{user.last_name}</td>
                  <td className="td-style">{user.email}</td>
                  <td className="td-style">
                    <Link to={`/admin/users/edit/${user.id}`} className="link-style">
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
  



export default AdminUsers;
