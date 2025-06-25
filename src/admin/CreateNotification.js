import React, { useEffect , useState } from "react";
import axios from "axios";

const CreateNotification = () => {
  const [status, setStatus] = useState(true); // true = active
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

  // Create a temporary div to parse HTML
  const temp = document.createElement("div");
  temp.innerHTML = rawContent;

  // Convert lists (ul, ol) to plain bullet/numbered lines
  const lists = temp.querySelectorAll("ul, ol");
  lists.forEach(list => {
    const isOrdered = list.tagName.toLowerCase() === "ol";
    const items = list.querySelectorAll("li");
    items.forEach((li, idx) => {
      const prefix = isOrdered ? `${idx + 1}. ` : "• ";
      const text = prefix + li.textContent.trim();
      const line = document.createTextNode(text + "\n");
      list.parentNode.insertBefore(line, list);
    });
    list.remove(); // remove original list
  });

  // Convert <br> tags to real line breaks
  const brs = temp.querySelectorAll("br");
  brs.forEach(br => br.replaceWith("\n"));

  // Final plain text without any HTML
  const plainText = temp.textContent.trim();

  if (!plainText) {
    alert("Notification content cannot be empty.");
    return;
  }

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/notifications`, {
  content: plainText,
  status: status ? "active" : "inactive",
});

    alert("Notification created successfully!");
  } catch (err) {
    console.error(err);
    alert("Error creating notification.");
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
                    <h4>Create Notification</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Create Notification
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="html-editor pd-20 card-box mb-30">
              <h4 className="h4 text-blue">Create Notifications for users</h4>
              <textarea
                className="textarea_editor form-control border-radius-0"
                placeholder="Enter text ..."
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


              <button className="btn btn-success mt-3" onClick={handleSubmit}>
                Submit Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotification;
