import React from 'react';
import styles from './Omnibar.module.css';

const UrlTab = ({children, isActive, handlerTabClick}) => {
    return (
        <li
            className={`${styles.navTab} ${isActive ? styles.active : ''}`}
            onClick={() => handlerTabClick(children)}
        >
            {children}</li>
    );
};

export default UrlTab;