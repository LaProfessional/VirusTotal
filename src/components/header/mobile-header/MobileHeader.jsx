import React, {useState} from 'react';
import styles from './Mobile-header.module.css';

import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";
import DropDownContent from "./DropDownContent";

import {ReactComponent as BurgerMenu} from "../../../assets/header/burger-menu.svg";
import {ReactComponent as Grid} from "../../../assets/header/grid.svg";
import {ReactComponent as Search} from "../../../assets/header/search-icon.svg";
import {ReactComponent as Logo} from "../../../assets/content/logo.svg";

const MobileHeader = () => {

    const [isDropDownMenu, setIsDropDownMenu] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const [openSearchBar, setOpenSearchBar] = useState(false);

    const [openDropDownContent, setopenDropDownContent] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div
                className={`${styles.overlay} ${overlay ? styles.show : ''}`}
                onClick={() => {
                    setIsDropDownMenu(false);
                    setTimeout(() => {
                        setOverlay(false);
                    }, 300);
                }}>
            </div>

            <BurgerMenu className={styles.burgerMenu} onClick={() => {
                setIsDropDownMenu(true);
                setOverlay(true);
            }}/>

            <DropDownMenu isDropDownMenu={isDropDownMenu}
                          setIsDropDownMenu={setIsDropDownMenu}
                          setOverlay={setOverlay}
            />

            <Logo className={styles.logo}/>

            <div className={styles.actions}>
                <Search className={styles.search}
                        onClick={() => setOpenSearchBar(true)}
                />
                <Grid className={styles.grid}
                      onClick={() => setopenDropDownContent(true)}
                />
            </div>

            <SearchBar
                openSearchBar={openSearchBar}
                setOpenSearchBar={setOpenSearchBar}
            />

            <DropDownContent
                openDropDownContent={openDropDownContent}
                setOpenDropDownContent={setopenDropDownContent}
            />
        </header>
    );
};

export default MobileHeader;