import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DynamicTable from "../components/Admin/DynamicTable";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const toggleStatus = (userId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    fetch(`${process.env.REACT_APP_API_URL}/admin/users/${userId}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetchUsers(); 
        }
      })
      .catch((err) => console.error("Status update failed", err));
  };

  const fetchUsers = () => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched users:", data.users);
        if (data.success) {
          const updatedUsers = data.users.map((user) => ({
  ...user,
  name: user.name || `${user.first_name} ${user.last_name}`,
  status: (
    <button
      className={`btn btn-sm ${user.status === "active" ? "btn-success" : "btn-secondary"}`}
      onClick={() => toggleStatus(user.id, user.status)}
    >
      {user.status}
    </button>
  ),
  created_at: new Date(user.created_at).toLocaleString(),

  action: (
    <Link to={`/admin/userslist/userediting/${user.id}`} className="link-style">
      Edit
    </Link>
  ),
}));

          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);




 const columns = [
  { label: "ID", accessor: "id" },              
  { label: "USER_ID", accessor: "refer_code" }, 
  { label: "Name", accessor: "name" },
  { label: "Email", accessor: "email" },
  { label: "Registration Time", accessor: "created_at" }, 
  { label: "Status", accessor: "status" },
  { label: "Action", accessor: "action" },
];



  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <>
      <div className="mobile-menu-overlay"></div>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>User list</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a
                          href="/"
                          className="text-dark"
                          style={{ fontWeight: "400" }}
                        >
                          Home
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item text-primary active"
                        aria-current="page"
                      >
                        My Table
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="pd-20 card-box mb-30">
              <div className="clearfix mb-20">
                <div className="pull-left">
                  <h4 className="text-primary h4">Registered Users</h4>
                  
                </div>
              </div>

              {/* Table */}
              <DynamicTable columns={columns} data={currentRows} />

              {/* Pagination */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersList;
