import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DynamicTable from "../components/Admin/DynamicTable";

function AdminWallet() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const fetchUsers = () => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updatedUsers = data.users.map((user) => ({
            ...user,
            wallet: `₹${parseFloat(user.wallet || 0).toFixed(2)}`,
            action: (
              <div className="d-flex gap-2">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleWalletAction(user.id, "add")}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleWalletAction(user.id, "subtract")}
                >
                  Subtract
                </button>
                <Link
                  to={`/admin/wallet-history/${user.id}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  History
                </Link>
              </div>
            ),
          }));
          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleWalletAction = (userId, type) => {
    const amount = prompt(`Enter amount to ${type}`);
    if (!amount || isNaN(amount)) return alert("Invalid amount");

    fetch(`${process.env.REACT_APP_API_URL}/admin/wallet/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to_user_id: userId,
        amount: parseFloat(amount),
        type, // 'add' or 'subtract'
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || "Wallet updated");
        fetchUsers();
      })
      .catch((err) => {
        console.error("Wallet update failed", err);
        alert("Error updating wallet");
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { label: "ID", accessor: "id" },
    { label: "First Name", accessor: "first_name" },
    { label: "Last Name", accessor: "last_name" },
    { label: "Email", accessor: "email" },
    { label: "Wallet (₹)", accessor: "wallet" },
    { label: "Action", accessor: "action" },
  ];

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
                    <h4>Wallet Management</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/" className="text-dark" style={{ fontWeight: "400" }}>
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item text-primary active" aria-current="page">
                        Wallet Table
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="pd-20 card-box mb-30">
              <div className="clearfix mb-20">
                <div className="pull-left">
                  <h4 className="text-primary h4">All User Wallets</h4>
                  <p>
                    Wallet control: <code>.add .subtract .history</code>
                  </p>
                </div>
              </div>

              {/* Table */}
              <DynamicTable columns={columns} data={currentRows} />

              {/* Pagination */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

export default AdminWallet;
