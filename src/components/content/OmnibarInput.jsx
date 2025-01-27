import React from 'react';
import styles from './Omnibar.module.css';

const OmnibarInput = ({placeholder}) => {
    return (
        <input type="text"
               className={styles.omnibarInput}
               placeholder={placeholder}
        />
    );
};

export default OmnibarInput;