import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="#"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className={styles.socialLink}
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className={styles.socialLink}
          >
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.footerLinks}>

          {/* Column 1 */}
          <div className={styles.linkColumn}>
            <a href="#">Audio Description</a>
            <a href="#">Investor Relations</a>
            <a href="#">Legal Notices</a>
          </div>

          {/* Column 2 */}
          <div className={styles.linkColumn}>
            <a href="#">Help Centre</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
          </div>

          {/* Column 3 */}
          <div className={styles.linkColumn}>
            <a href="#">Gift Cards</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
          </div>

          {/* Column 4 */}
          <div className={styles.linkColumn}>
            <a href="#">Media Centre</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
          </div>

        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 1997-{currentYear} Netflix, Inc.
        </p>

      </div>
    </footer>
  );
}

export default Footer;