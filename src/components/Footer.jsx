// Footer.jsx 

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer2">
          <div className="left">
            <p>© 2023 Tops Tech. Pvt. Ltd. </p>
          </div>
          <div className="right">
            <ul>
              <li><Link to="/about-us"> | About Us </Link></li>
              <li><Link to="/work-with-us"> | Work With Us </Link></li>
              <li><Link to="/privacy-policy"> | Privacy Policy </Link></li>
              <li><Link to="/terms"> | Terms </Link></li>
              <li><Link to="/vulnerability-disclosure-policy"> | Vulnerability Disclosure Policy </Link></li>
              <li><Link to="/hall-of-fame"> | Hall of Fame </Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
