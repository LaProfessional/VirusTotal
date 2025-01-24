import React from 'react';
import classes from './header.module.css';

import {ReactComponent as HeaderLogo} from "../../assets/header-logo.svg";
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import {ReactComponent as ItemUploadFile} from "../../assets/upload-file.svg";
import {ReactComponent as ItemNotifications} from "../../assets/notifications-icon.svg";
import {ReactComponent as ItemContactSupport} from "../../assets/contact-support.svg";
import {ReactComponent as ItemSun} from "../../assets/sun.svg";

const Header = () => {
    return (
        <header className={classes.headerContainer}>
            <HeaderLogo className={classes.headerLogo}/>
            <div className={classes.headerInputContainer}>
                <button className={classes.btnQuickSearch}>
                    <SearchIcon/>
                </button>
                <input
                    type="text"
                    className={classes.headerInput}
                    placeholder={'URL, IP address, domain or file hash'}
                />
            </div>
            <div className={classes.headerContainerItems}>
                <ItemUploadFile className={classes.headerItem}/>
                <ItemNotifications className={classes.headerItem}/>
                <ItemContactSupport className={classes.headerItem}/>
                <ItemSun className={classes.headerItem}/>
            </div>
            <div className={classes.loginOption}>
                <a href="#">
                    <button className={classes.signIn}>Sign in</button>
                </a>
                <a href="#">
                    <button className={classes.signUp}>Sign up</button>
                </a>
            </div>
        </header>
    );
};

export default Header;