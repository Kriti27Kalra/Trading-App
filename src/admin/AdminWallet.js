import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../components/Admin/DynamicForm";
import AlertMessage from "../components/Admin/AlertMessage";

function AdminWallet() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  const [referCodeInput, setReferCodeInput] = useState("");
  const [userName, setUserName] = useState("");
  const [referCodeError, setReferCodeError] = useState("");

  const typingTimeoutRef = useRef(null);

  const handleReferCodeChange = (value) => {
    setReferCodeInput(value);
    setUserName("");
    setReferCodeError("");

    // Clear previous timer
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // ✅ Debounce: Wait 600ms after user stops typing
    typingTimeoutRef.current = setTimeout(() => {
      // Avoid fetching for very short values
      if (value.length < 4) return;

      fetch(`${process.env.REACT_APP_API_URL}/user/by-refcode/${value}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.user) {
            setUserName(`${data.user.first_name} ${data.user.last_name}`);
          } else {
            setReferCodeError("User not found");
          }
        })
        .catch((err) => {
          console.error(err);
          setReferCodeError("Error fetching user");
        });
    }, 100); // adjust delay as needed
  };

  const fields = [
    {
      name: "to_refer_code",
      label: "To_ID",
      type: "text",
      placeholder: "Enter user refer code",
      onChange: handleReferCodeChange,
      extraContent: userName ? (
        <small className="text-success">User: {userName}</small>
      ) : referCodeError ? (
        <small className="text-danger">{referCodeError}</small>
      ) : null,
    },
    {
      name: "amount",
      label: "Amount",
      type: "number",
      placeholder: "Enter amount",
    },
    {
      name: "type",
      label: "Transaction Type",
      type: "select",
      options: [
        { value: "add", label: "Add" },
        { value: "subtract", label: "Subtract" },
      ],
    },
  ];

  const handleSubmit = (formData) => {
    if (!formData.to_refer_code || !formData.amount || !formData.type) {
      setAlertMessage({ type: "error", message: "Please fill all fields correctly" });
      return;
    }

    const dataToSend = {
      to_refer_code: formData.to_refer_code,
      amount: Number(formData.amount),
      type: formData.type,
    };

    fetch(`${process.env.REACT_APP_API_URL}/wallet/transaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAlertMessage({ type: "success", message: "Transaction successful" });
          setTimeout(() => navigate("/admin/dashboard"), 2000);
        } else {
          setAlertMessage({ type: "error", message: data.message || "Transaction failed" });
        }
      })
      .catch((err) => {
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
                  <h4>Admin Wallet Transaction</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-dark" style={{ fontWeight: "400" }}>
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">
                      Wallet
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="pd-20 card-box mb-30">
            <div className="clearfix mb-2">
              <div className="pull-left">
                <h4 className="text-primary h4">Wallet Form</h4>
                <p className="mb-30">Form for managing admin transactions</p>
              </div>
            </div>

            {alertMessage && (
              <AlertMessage type={alertMessage.type} message={alertMessage.message} />
            )}

            <DynamicForm fields={fields} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminWallet;
