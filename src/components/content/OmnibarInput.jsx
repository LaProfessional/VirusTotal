import React, {useEffect, useRef} from 'react';
import styles from './Omnibar.module.css';

const OmnibarInput = ({placeholder}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input type="text"
               className={styles.omnibarInput}
               placeholder={placeholder}
               ref={inputRef}
        />
    );
};

export default OmnibarInput;