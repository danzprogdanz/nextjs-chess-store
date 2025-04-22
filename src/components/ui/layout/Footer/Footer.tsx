import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h4 className={styles.heading}>About Us</h4>
          <p className={styles.text}>
            Discover the finest selection of products curated just for you.
            Quality meets convenience in every purchase.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.heading}>Help & Support</h4>
          <ul className={styles.list}>
            <li>
              <a href="/faq" className={styles.link}>
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className={styles.link}>
                Shipping Information
              </a>
            </li>
            <li>
              <a href="/returns" className={styles.link}>
                Returns Policy
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.link}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.heading}>Stay Connected</h4>
          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button className={styles.button}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <div className={styles.legalContent}>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} Store Name
          </span>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
            <a href="/terms" className={styles.link}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
