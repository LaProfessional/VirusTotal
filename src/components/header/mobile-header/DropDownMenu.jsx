import styles from './Mobile-header.module.css';

const DropDownMenu = ({isMenuOpen}) => {
    return (
        <div
            className={`${styles.dropDownMenu} ${isMenuOpen ? styles.open : ''}`}
        >

            <div className={styles.signInBox}>
                <p>Log in to your account</p>
                <button className={styles.signInBtn}>Sign in</button>
            </div>

            <ul>
                <li>
                    <a href="#" className={styles.link}>New? Join the community</a>
                </li>
                <li>
                    <a href="#" className={styles.link}>Forgot password</a>
                </li>
                <li>
                    <a href="#" className={styles.link}>Documentation</a>
                </li>
            </ul>
        </div>
    );
};

export default DropDownMenu;