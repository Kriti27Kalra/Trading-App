import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DynamicTable from "../components/Admin/DynamicTable"; 

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Add 'action' field for the table
          const updatedUsers = data.users.map((user) => ({
            ...user,
            action: (
              <Link to={`/admin/userslist/userediting/${user.id}`} className="link-style">
                Edit
              </Link>
            )
          }));
          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    { label: "ID", accessor: "id" },
    { label: "First Name", accessor: "first_name" },
    { label: "Last Name", accessor: "last_name" },
    { label: "Email", accessor: "email" },
    { label: "Action", accessor: "action" }
  ];
  return(
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
                        <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                      </li>
                      <li className="breadcrumb-item text-primary active" aria-current="page">My Table</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-6 col-sm-12 text-right">
                  <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
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
              <div className="clearfix mb-20">
                <div className="pull-left">
                  <h4 className="text-primary h4">Registered Users</h4>
                  <p>Add <code>.table-bordered .table-hover</code> to style table.</p>
                </div>
                <div className="pull-right">
                  <a href="#striped-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button">
                    <i className="fa fa-code"></i> Source Code
                  </a>
                </div>
              </div>

              {/* Dynamic Table */}
              <DynamicTable columns={columns} data={users} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersList;
