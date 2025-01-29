import React, {useRef, useState} from 'react';
import styles from './Content.module.css';

import Tab from './Tab';
import FileTab from "./FileTab";
import UrlTab from "./UrlTab";
import SearchTab from "./SearchTab";

import {ReactComponent as Logo} from "../../assets/content/logo.svg";
import {ReactComponent as Automate} from "../../assets/omnibar/automate.svg";
import {ReactComponent as Important} from "../../assets/omnibar/important.svg";

const Content = () => {

    const [activeTab, setActiveTab] = useState('FILE');
    const [currentTab, setCurrentTab] = useState(<FileTab/>);
    const [isVisibleTooltip, setVisibleTooltip] = useState(null);

    const tabs = ['FILE', 'URL', 'SEARCH'];
    const dataTabs = [
        {tab: <FileTab/>},
        {tab: <UrlTab/>},
        {tab: <SearchTab/>},
    ];

    const handlerTabClick = tabName => {
        const selectedTab = tabs.find(tab => tab === tabName);

        if (selectedTab) {
            setActiveTab(tabName);
            const selectedTabIndex = tabs.indexOf(tabName);
            setCurrentTab(dataTabs[selectedTabIndex].tab);
        }
    };

    const tooltipTimeout = useRef();
    const showTooltip = () => {
        tooltipTimeout.current = setTimeout(() => {
            setVisibleTooltip(true);
        }, 200);
    };

    const hideTooltip = () => {
        clearTimeout(tooltipTimeout.current);
        setVisibleTooltip(null);
    }

    return (
        <div className={styles.content}>
            <Logo className={styles.logo}/>
            <p className={styles.about}>Analyse suspicious files, domains, IPs and URLs to detect malware and other
                breaches, automatically share them with the security community.
            </p>

            <div className={styles.omnibarContainer}>
                <ul className={styles.tabsWrapper}>
                    <Tab isActive={activeTab === 'FILE'} handlerTabClick={handlerTabClick}>FILE</Tab>
                    <Tab isActive={activeTab === 'URL'} handlerTabClick={handlerTabClick}>URL</Tab>
                    <Tab isActive={activeTab === 'SEARCH'} handlerTabClick={handlerTabClick}>SEARCH</Tab>

                    <div className={`${styles.tooltipContainer} ${isVisibleTooltip ? '' : styles.hidden}`}>
                        <div className={styles.tooltip}>Automate</div>
                    </div>

                    <Automate
                        onMouseEnter={showTooltip}
                        onMouseLeave={hideTooltip}

                        className={styles.automate}/>
                </ul>

                {currentTab}

                <div className={styles.tipContainer}>
                    <Important className={styles.important}/>
                    <p className={styles.tip}>Want to automate submissions? <a href="#">Check our API</a>, or access
                        your <a
                            href="#">API key</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Content;