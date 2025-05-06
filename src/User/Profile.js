import React, { useState } from "react";

const Profile = () => {
  // Example user data — replace with API or localStorage later
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    referCode: "REF1234"
  });

  return (
    <div>
      <h2 className="mb-4">My Profile</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Referral Code:</strong> {user.referCode}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
