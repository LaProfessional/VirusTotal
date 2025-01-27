import React from 'react';
import styles from './Omnibar.module.css';

const Omnibar = ({children}) => {
    return (
        <div className={styles.omnibar}>{children}</div>
    );
};

export default Omnibar;