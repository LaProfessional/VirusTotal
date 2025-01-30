import React, {useEffect, useRef} from 'react';
import styles from './Mobile-header.module.css';

import {ReactComponent as CloseIcon} from "../../../assets/header/icon-close.svg";
import {ReactComponent as Search} from "../../../assets/header/search-icon.svg";

const SearchBar = ({openSearchBar, setOpenSearchBar}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        if (openSearchBar && inputRef.current) {
            inputRef.current.focus();
        }
    }, [openSearchBar]);

    const closeSearchBar = () => {
        setOpenSearchBar(false);
    }

    return (
        <div className={`${styles.searchBarContainer} ${openSearchBar ? styles.open : ''}`}>
            <CloseIcon className={styles.closeIcon}
                       onClick={closeSearchBar}
            />
            <input type="text"
                   className={styles.input}
                   placeholder={'URL, IP address, domain, or file hash'}
                   ref={inputRef}
            />
            <Search className={styles.search}
                    onClick={closeSearchBar}
            />
        </div>
    );
};

export default SearchBar;