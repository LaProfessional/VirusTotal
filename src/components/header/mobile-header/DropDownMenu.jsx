import styles from './Mobile-header.module.css';
import {useRef, useState} from "react";

const DropDownMenu = ({isDropDownMenu, setIsDropDownMenu, setOverlay}) => {

    // const isAnimating = useRef(false);

    // const closeDropDownMenu = () => {
    //     if (isAnimating.current) return;
    //     isAnimating.current = true;
    //
    //     setIsDropDownMenu(false);
    //     setTimeout(() => {
    //         setOverlay(false);
    //         isAnimating.current = false;
    //     }, 300);
    // };

    return (
        <div
            className={`${styles.dropDownMenu} ${isDropDownMenu ? styles.open : ''}`}
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