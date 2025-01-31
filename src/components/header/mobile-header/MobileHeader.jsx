import React, {useState} from 'react';
import styles from './MobileHeader.module.css';

import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";
import DropDownContent from "./DropDownContent";

import {ReactComponent as BurgerMenu} from "../../../assets/header/burger-menu.svg";
import {ReactComponent as Grid} from "../../../assets/header/grid.svg";
import {ReactComponent as Search} from "../../../assets/header/search-icon.svg";
import {ReactComponent as Logo} from "../../../assets/content/logo.svg";

const MobileHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div
                className={`${styles.overlay} ${isOverlayVisible ? styles.show : ''}`}
                onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                        setIsOverlayVisible(false);
                    }, 300);
                }}>
            </div>

            <BurgerMenu className={styles.burgerMenu} onClick={() => {
                setIsMenuOpen(true);
                setIsOverlayVisible(true);
            }}/>

            <DropDownMenu isMenuOpen={isMenuOpen}
                          setIsMenuOpen={setIsMenuOpen}
                          isOverlayVisible={isOverlayVisible}
            />

            <Logo className={styles.logo}/>

            <div className={styles.actions}>
                <Search className={styles.search}
                        onClick={() => setIsSearchOpen(true)}
                />
                <Grid className={styles.grid}
                      onClick={() => setIsDropDownOpen(true)}
                />
            </div>

            <SearchBar
                isSearchOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
            />

            <DropDownContent
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
            />
        </header>
    );
};

export default MobileHeader;