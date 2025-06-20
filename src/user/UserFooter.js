import React from 'react';

function UserFooter() {
  const footerText = process.env.REACT_APP_FOOTER_TEXT;

  return (
    <footer>
      <div className="pd-ltr-20">
        <div className="footer-wrap pd-20 mb-20 card-box text-center">
          {footerText}
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;
