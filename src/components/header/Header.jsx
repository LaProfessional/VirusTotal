import React, {useState} from 'react';
import HeaderTooltip from "./HeaderTooltip";
import SwitcherTheme from "./SwitcherTheme";
import classes from './header.module.css';

import {ReactComponent as HeaderLogo} from "../../assets/header-logo.svg";
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import {ReactComponent as ItemUploadFile} from "../../assets/upload-file.svg";
import {ReactComponent as ItemNotifications} from "../../assets/notifications-icon.svg";
import {ReactComponent as ItemContactSupport} from "../../assets/contact-support.svg";
import {ReactComponent as ItemSun} from "../../assets/sun.svg";
import {ReactComponent as ItemMoon} from "../../assets/moon.svg";

const Header = () => {

    const [isTooltipVisible, setTooltipVisible] = useState(null);
    const [themeIcon, setThemeIcon] = useState(<ItemSun className={classes.headerItem}/>);

    const tooltipData = [
        {icon: <ItemUploadFile className={classes.headerItem}/>, text: "Upload file"},
        {icon: <ItemNotifications className={classes.headerItem}/>, text: "View notifications"},
        {icon: <ItemContactSupport className={classes.headerItem}/>, text: "Contact support"},
        {icon: themeIcon, text: null},
    ];

    let tooltipTimeout;
    const showTooltip = index => {
        tooltipTimeout = setTimeout(() => {
            setTooltipVisible(index);
        }, 200);
    };

    const hideTooltip = () => {
        clearTimeout(tooltipTimeout);
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
        if (index === 3) {

            setThemeIcon(prevIcon => (prevIcon.type === ItemSun ?
                <ItemMoon className={classes.headerItem}/> :
                <ItemSun className={classes.headerItem} />));
        }
    }

    return (
        <header className={classes.headerContainer}>
            <a href="#" className={classes.headerLogoContainer}>
                <HeaderLogo className={classes.headerLogo}/>
            </a>

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

            <div className={classes.headerItemsContainer}>
                {tooltipData.map((item, index) =>
                    <div
                        key={index}
                        onMouseEnter={() => showTooltip(index)}
                        onMouseLeave={hideTooltip}
                        onClick={() => clickHandler(index)}

                        className={classes.headerItemContainer}
                    >{item.icon}
                        {renderTooltip(item, index)}
                    </div>
                )}
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