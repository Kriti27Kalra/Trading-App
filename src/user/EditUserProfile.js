import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
function EditUserProfile() {
  const navigate = useNavigate();

  // Get logged-in user info from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser ? (storedUser.id || storedUser._id) : null;

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    if (!userId) {
      alert("User not found. Please login.");
      navigate("/login");
      return;
    }

    fetch(`http://localhost:5000/api/admin/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        } else {
          alert("User not found");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching user data");
      });
  }, [userId, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!userId) {
    alert("User ID not found");
    return;
  }

  fetch(`http://localhost:5000/api/admin/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("Profile updated successfully");

        // Update user in localStorage with new name data
        // Assuming your user object in localStorage has 'name' as full name or you can adjust accordingly
        const updatedUser = JSON.parse(localStorage.getItem("user")) || {};
        updatedUser.name = `${user.first_name} ${user.last_name}`;
        // Also update any other fields if needed like email
        updatedUser.email = user.email;

        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Dispatch event to notify dashboard
        window.dispatchEvent(new Event("userUpdated"));

        // Redirect to dashboard
        navigate("/user/dashboard");
      } else {
        alert("Update failed");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Error updating profile");
    });
};

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="heading">Edit Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}




export default EditUserProfile;
