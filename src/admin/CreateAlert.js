import React, { useEffect } from "react";
import axios from "axios";

const CreateAlert = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.$ && window.$(".textarea_editor").wysihtml5) {
        window.$(".textarea_editor").wysihtml5();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

 const handleSubmit = async () => {
  const rawContent = document.querySelector(".textarea_editor").value;

  const cleanedContent = rawContent
    .trim()
    .replace(/(<br\s*\/?>\s*){2,}/gi, "<br>"); // replace multiple <br> with one

  if (!cleanedContent) {
    alert("Alert content cannot be empty.");
    return;
  }

  try {
    await axios.post("http://localhost:5000/api/alerts", {
      content: cleanedContent,
    });
    alert("Alert created successfully!");
  } catch (err) {
    console.error(err);
    alert("Error creating alert.");
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
                    <h4>Create Alert</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Create Alert
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-6 col-sm-12 text-right">
                  <div className="dropdown">
                    <a
                      className="btn btn-primary dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                    >
                      January 2018
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Export List
                      </a>
                      <a className="dropdown-item" href="#">
                        Policies
                      </a>
                      <a className="dropdown-item" href="#">
                        View Assets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="html-editor pd-20 card-box mb-30">
              <h4 className="h4 text-blue">Create Alerts for users</h4>
              <textarea
                className="textarea_editor form-control border-radius-0"
                placeholder="Enter text ..."
              ></textarea>

              <button className="btn btn-success mt-3" onClick={handleSubmit}>
                Submit Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAlert;
