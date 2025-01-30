import React, {use, useState} from 'react';
import styles from './Mobile-header.module.css';

import {ReactComponent as BurgerMenu} from "../../../assets/header/burger-menu.svg";
import {ReactComponent as Grid} from "../../../assets/header/grid.svg";
import {ReactComponent as Search} from "../../../assets/header/search-icon.svg";
import {ReactComponent as Logo} from "../../../assets/content/logo.svg";

const MobileHeader = () => {

    const [isDropDownMenu, setIsDropDownMenu] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const openDropDownMenu = () => {
        setOverlay(true);
        setIsDropDownMenu(true);
    };

    const closeDropDownMenu = () => {
        setIsDropDownMenu(false);
        setTimeout(() => {
            setOverlay(false);
        }, 300);
    };

    return (
        <header className={styles.headerContainer}>
            <div
                className={`${styles.overlay} ${overlay ? styles.show : ''}`}
                onClick={closeDropDownMenu}
            ></div>

            <BurgerMenu className={styles.burgerMenu} onClick={openDropDownMenu}/>
            <div
                onClick={closeDropDownMenu}
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

            <Logo className={styles.logo}/>

            <div className={styles.actions}>
                <Search className={styles.search}/>
                <Grid className={styles.grid}/>
            </div>


        </header>
    );
};

export default MobileHeader;