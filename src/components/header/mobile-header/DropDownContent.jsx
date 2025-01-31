import React, {useRef} from 'react';
import styles from './Mobile-header.module.css';
import useOnClickOutside from "../../hooks/useOnClickOutside";

import {ReactComponent as CloseIcon} from "../../../assets/header/icon-close.svg";
import {ReactComponent as PrivateScanning} from "../../../assets/header/private-scanning.svg";
import {ReactComponent as ThreatLandscape} from "../../../assets/header/threat-landscape.svg";
import {ReactComponent as Vtapi} from "../../../assets/header/vtapi.svg";
import {ReactComponent as Vtgraph} from "../../../assets/header/vtgraph.svg";
import {ReactComponent as Vthunting} from "../../../assets/header/vthunting.svg";
import {ReactComponent as Vtintelligence} from "../../../assets/header/vtintelligence.svg";

const DropDownContent = ({openDropDownContent, setOpenDropDownContent}) => {

    const dataMenuItems = [
        {icon: <Vtapi className={styles.iconNav}/>, title: 'Vtapi'},
        {icon: <Vtintelligence className={styles.iconNav}/>, title: 'Vtintelligence'},
        {icon: <Vthunting className={styles.iconNav}/>, title: 'Vthunting'},
        {icon: <Vtgraph className={styles.iconNav}/>, title: 'Vtgraph'},
        {icon: <ThreatLandscape className={styles.iconNav}/>, title: 'ThreatLandscape'},
        {icon: <PrivateScanning className={styles.iconNav}/>, title: 'PrivateScanning'},
    ];

    const ref = useRef();
    useOnClickOutside(ref, () => setOpenDropDownContent(false));

    const closeDropDownContent = () => {
        setOpenDropDownContent(false);
    };

    return (
        <div ref={ref}
            className={`${styles.contentContainer} ${openDropDownContent ? styles.open : ''}`}>
            <div className={styles.titleContainer}>
                <CloseIcon className={`${styles.closeIcon} ${styles.positionCloseIcon}`}
                    onClick={closeDropDownContent}
                />
                <h1 className={styles.header}>THREAT INTELLIGENCE SUITE</h1>
            </div>

            <nav className={styles.menuContainer}>
                {dataMenuItems.map((item, index) =>
                    <div className={styles.menuItem}
                         key={index}
                    >
                        {item.icon}
                        <h2 className={styles.title}>{item.title}</h2>
                    </div>
                )}
            </nav>

            <div className={styles.tools}>
                <ul>
                    <li>
                        <a href="#" className={styles.tool}>Mobile</a>
                    </li>
                    <li>
                        <a href="#" className={styles.tool}>Desktop</a>
                    </li>
                    <li>
                        <a href="#" className={styles.tool}>Browsers</a>
                    </li>
                    <li>
                        <a href="#" className={styles.tool}>Yara</a>
                    </li>
                </ul>
            </div>

            <a href="#" className={styles.contactUs}>
                <button>Contact us</button>
            </a>
        </div>
    );
};

export default DropDownContent;