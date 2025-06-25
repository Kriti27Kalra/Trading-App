import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditNotification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(true); // true = active, false = inactive


  // Fetch existing notification by ID
  useEffect(() => {
    axios.get(`http://localhost:5000/api/notifications/${id}`)
     .then(res => {
  setContent(res.data.content || "");
  setStatus(res.data.status === "active"); // assuming status is "active"/"inactive"
  setTimeout(() => {
    if (window.$ && window.$(".textarea_editor").wysihtml5) {
      window.$(".textarea_editor").wysihtml5();
    }
  }, 300);
})

    
      .catch(err => {
        console.error("Failed to load notification", err);
        alert("Failed to load notification content.");
      });
  }, [id]);

  const handleUpdate = async () => {
    const updatedContent = document
      .querySelector(".textarea_editor")
      .value.trim()
      .replace(/(<br>\s*){2,}/g, "<br>");

    if (!updatedContent.trim()) {
      alert("Notification content cannot be empty.");
      return;
    }
try {
  await axios.put(`http://localhost:5000/api/notifications/${id}`, {
    content: updatedContent,
    status: status ? "active" : "inactive"
  });
  alert("Notification updated successfully!");
  navigate("/admin/edit-notificationlist");
} catch (err) {
  console.error(err);
  alert("Error updating notification.");
}
  };

  return (
    <div>
      <div className="mobile-menu-overlay"></div>

      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Edit Notification</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Edit Notification</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="html-editor pd-20 card-box mb-30">
              <h4 className="h4 text-blue">Update Notification</h4>
              <textarea
                className="textarea_editor form-control border-radius-0"
                placeholder="Edit notification content here..."
                defaultValue={content}
              ></textarea>


<div className="form-group mt-3">
  <label htmlFor="statusSwitch">Notification Status: </label>
  <div className="custom-control custom-switch d-inline-block ml-2">
    <input
      type="checkbox"
      className="custom-control-input"
      id="statusSwitch"
      checked={status}
      onChange={() => setStatus(!status)}
    />
    <label className="custom-control-label" htmlFor="statusSwitch">
      {status ? "Active" : "Inactive"}
    </label>
  </div>
</div>

              <button className="btn btn-primary mt-3" onClick={handleUpdate}>
                Update Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNotification;
