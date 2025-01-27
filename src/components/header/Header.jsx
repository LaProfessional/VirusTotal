import React, {useRef, useState} from 'react';
import HeaderTooltip from "./HeaderTooltip";
import ModalWindow from "../modal-window/ModalWindow";
import Notifications from "./Notifications";

import styles from './Header.module.css';

import {ReactComponent as HeaderLogo} from "../../assets/header/header-logo.svg";
import {ReactComponent as SearchIcon} from '../../assets/header/search-icon.svg';
import {ReactComponent as ItemUploadFile} from "../../assets/header/upload-file.svg";
import {ReactComponent as ItemNotifications} from "../../assets/header/notifications-icon.svg";
import {ReactComponent as ItemContactSupport} from "../../assets/header/contact-support.svg";
import {ReactComponent as ItemSun} from "../../assets/header/sun.svg";
import {ReactComponent as ItemMoon} from "../../assets/header/moon.svg";

const Header = () => {

    const [isTooltipVisible, setTooltipVisible] = useState(null);
    const [themeIcon, setThemeIcon] = useState(<ItemSun className={styles.headerItem}/>);
    const [modal, setModal] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const darkEl = document.querySelector('.dark');

    const tooltipData = [
        {icon: <ItemUploadFile className={styles.headerItem}/>, text: "Upload file"},
        {icon: <ItemNotifications className={styles.headerItem}/>, text: "View notifications"},
        {icon: <ItemContactSupport className={styles.headerItem}/>, text: "Contact support"},
        {icon: themeIcon, text: null},
    ];

    const tooltipTimeout = useRef();

    const showTooltip = index => {
        tooltipTimeout.current = setTimeout(() => {
            setTooltipVisible(index);
        }, 200);
    };

    const hideTooltip = () => {
        clearTimeout(tooltipTimeout.current);
        setTooltipVisible(null);
    };

    const renderTooltip = (item, index) => {
        if (index === tooltipData.length - 1) return;

        if (index === isTooltipVisible) {
            return <HeaderTooltip isVisible>{item.text}</HeaderTooltip>;
        }
        return null;
    };

    const clickHandler = index => {
        if (index === 0) {
            setModal(true);
        }

        if (index === 1) {
            setShowNotifications(true);
        }

        if (index === 3) {
            setThemeIcon(prevIcon => (prevIcon.type === ItemSun ?
                <ItemMoon className={styles.headerItem}/> :
                <ItemSun className={styles.headerItem}/>));
            darkEl.classList.toggle('light');
        }
    }

    return (
        <header className={styles.headerContainer}>
            <ModalWindow visible={modal} setVisible={setModal}/>

            <a href="#" className={styles.headerLogoContainer}>
                <HeaderLogo className={styles.headerLogo}/>
            </a>

            <div className={styles.headerInputContainer}>
                <button className={styles.btnQuickSearch}>
                    <SearchIcon className={styles.searchIcon}/>
                </button>
                <input
                    type="text"
                    className={styles.headerInput}
                    placeholder={'URL, IP address, domain or file hash'}
                />
            </div>

            <div className={styles.headerItemsContainer}>
                <Notifications visible={showNotifications} setVisible={setShowNotifications} />

                {tooltipData.map((item, index) =>
                    <div
                        key={index}
                        onMouseEnter={() => showTooltip(index)}
                        onMouseLeave={hideTooltip}
                        onClick={() => clickHandler(index)}

                        className={styles.headerItemContainer}
                    >{item.icon}
                        {renderTooltip(item, index)}
                    </div>
                )}
            </div>

            <div className={styles.loginOption}>
                <a href="#">
                    <button className={styles.signIn}>Sign in</button>
                </a>
                <a href="#">
                    <button className={styles.signUp}>Sign up</button>
                </a>
            </div>
        </header>
    );
};

export default Header;