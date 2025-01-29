import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footer}>

                <div className={styles.list}>
                    <h2 className={styles.header}>
                        <a href="#" >Our product</a>
                    </h2>
                    <ul>
                        <li>
                            <a href="#" className={`${styles.footerLink} ${styles.highlightedLink}`}>Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Get Support</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>How It Works</a>
                        </li>
                        <li className={styles.linkContainer}>
                            <a href="#" className={styles.footerLink}>ToS</a>
                            <span className={styles.divider}>|</span>
                            <a href="#" className={styles.footerLink}>Privacy Notice</a>
                        </li>
                        <li className={styles.linkContainer}>
                            <a href="#" className={styles.footerLink}>Blog</a>
                            <span className={styles.divider}>|</span>
                            <a href="#" className={styles.footerLink}>Releases</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.list}>
                    <h2 className={styles.header}>
                        <a href="#">Community</a>
                    </h2>
                    <ul>
                        <li>
                            <a href="#" className={styles.footerLink}>Join Community</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Vote and Comment</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Contributors</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Top Users</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Community Buzz</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.list}>
                    <h2 className={styles.header}>
                        <a href="#">Tools</a>
                    </h2>
                    <ul>
                        <li>
                            <a href="#" className={styles.footerLink}>API Scripts</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>YARA</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Desktop Apps</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Browser Extensions</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Mobile App</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.list}>
                    <h2 className={styles.header}>
                        <a href="#">Premium Services</a>
                    </h2>
                    <ul>
                        <li>
                            <a href="#" className={`${styles.footerLink} ${styles.highlightedLink}`}>Get a demo</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Intelligence</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Hunting</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Graph</a>
                        </li>
                        <li className={styles.linkContainer}>
                            <a href="#" className={styles.footerLink}>API</a>
                            <a href="#" className={styles.footerLink}>v3</a>
                            <span className={styles.divider}>|</span>
                            <a href="#" className={styles.footerLink}>v2</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.list}>
                    <h2 className={styles.header}>
                        <a href="#">Documentation</a>
                    </h2>
                    <ul>
                        <li>
                            <a href="#" className={styles.footerLink}>Searching</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerLink}>Reports</a>
                        </li>
                        <li className={styles.linkContainer}>
                            <a href="#" className={styles.footerLink}>API</a>
                            <a href="#" className={styles.footerLink}>v3</a>
                            <span className={styles.divider}>|</span>
                            <a href="#" className={styles.footerLink}>v2</a>
                        </li>
                        <li>
                            <a href="#" className={`${styles.footerLink} ${styles.highlightedLink}`}>Use Cases</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;