import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h4 className={styles.heading}>About Us</h4>
          <p className={styles.text}>
            This is a portfolio project developed by Daniel Viana as a
            demonstration of his skills in design, development, and
            problem-solving. It serves as an example of his technical abilities
            and creative approach, intended for potential employers,
            collaborators, or clients to review. Note: This is not a commercial
            product—it was created solely for educational and portfolio
            purposes. All rights reserved.
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
            <li>
              <a
                href="https://github.com/danzprogdanz"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-viana-a6bb59174/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.heading}>Stay Connected</h4>
          <div className={styles.newsletter}>
            <Input
              type="email"
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <div className={styles.legalContent}>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} Danz’s Castle & Crown
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
