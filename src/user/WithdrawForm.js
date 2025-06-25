import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../components/Admin/DynamicForm";
import AlertMessage from "../components/Admin/AlertMessage";

function WithdrawForm() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [alertMessage, setAlertMessage] = useState(null);

  const fields = [
    {
      name: "amount",
      label: "Amount",
      type: "number",
      placeholder: "Enter amount (min $20, multiple of $10)",
    },
    {
      name: "method",
      label: "Withdrawal Method",
      type: "select",
      options: [
        { value: "UPI", label: "UPI" },
        { value: "Bank", label: "Bank Transfer" },
        { value: "Paytm", label: "Paytm" },
      ],
    },
    {
      name: "account_details",
      label: "Account Details",
      type: "textarea",
      placeholder: "Enter UPI ID, Bank Account, or Paytm number",
    },
  ];

  const handleSubmit = (formData) => {
    const amount = Number(formData.amount);

    if (!amount || !formData.method || !formData.account_details) {
      setAlertMessage({ type: "error", message: "Please fill all fields correctly" });
      return;
    }

    if (amount < 20 || amount % 10 !== 0) {
      setAlertMessage({ type: "error", message: "Amount must be at least $20 and a multiple of $10" });
      return;
    }

    const payload = {
      userId: user.id,
      amount,
      method: formData.method,
      accountDetails: formData.account_details,
    };

    fetch(`${process.env.REACT_APP_API_URL}/withdraw/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAlertMessage({ type: "success", message: "Withdrawal request submitted" });
          setTimeout(() => navigate("/user/withdraw-history"), 2000);
        } else {
          setAlertMessage({ type: "error", message: data.message || "Failed to submit request" });
        }
      })
      .catch((err) => {
        console.error(err);
        setAlertMessage({ type: "error", message: "Server error" });
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
                  <h4>Withdraw Funds</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-dark" style={{ fontWeight: "400" }}>
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">
                      Withdraw
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="pd-20 card-box mb-30">
            <div className="clearfix mb-2">
              <div className="pull-left">
                <h4 className="text-primary h4">Withdraw Form</h4>
                <p className="mb-30">Submit a request to withdraw your balance</p>
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

export default WithdrawForm;
