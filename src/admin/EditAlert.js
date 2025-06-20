import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAlert = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  // Fetch existing alert by ID
  useEffect(() => {
    axios.get(`http://localhost:5000/api/alerts/${id}`)
      .then(res => {
        setContent(res.data.content || "");
        setTimeout(() => {
          if (window.$ && window.$(".textarea_editor").wysihtml5) {
            window.$(".textarea_editor").wysihtml5();
        const iframe = document.querySelector("iframe.wysihtml5-sandbox");
          }
        }, 300);
      })
      .catch(err => {
        console.error("Failed to load alert", err);
        alert("Failed to load alert content.");
      });
  }, [id]);

  const handleUpdate = async () => {
    
const updatedContent = document.querySelector(".textarea_editor").value.trim().replace(/(<br>\s*){2,}/g, "<br>");

    if (!updatedContent.trim()) {
      alert("Alert content cannot be empty.");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/alerts/${id}`, {
        content: updatedContent
      });
      alert("Alert updated successfully!");
      navigate("/admin/edit-alertlist");
    } catch (err) {
      console.error(err);
      alert("Error updating alert.");
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
                    <h4>Edit Alert</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Edit Alert</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="html-editor pd-20 card-box mb-30">
              <h4 className="h4 text-blue">Update Alert</h4>
              <textarea
                className="textarea_editor form-control border-radius-0"
                placeholder="Edit alert content here..."
                defaultValue={content}
              ></textarea>

              <button className="btn btn-primary mt-3" onClick={handleUpdate}>
                Update Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAlert;
