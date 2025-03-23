import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-8">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          CloudLink
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
