import style from './Omnibar.module.css';

import Omnibar from "./Omnibar";
import OmnibarInput from "./OmnibarInput";
import UserAgreement from "../modal-window/UserAgreement";

import {ReactComponent as Search} from "../../assets/omnibar/search.svg";

const SearchTab = () => {
    return (
        <Omnibar>
            <Search/>
            <p className={style.description}>Search for a hash, domain, IP address, URL or gain additional context and
                threat landscape visibility with <a href="#">our Threat Intelligence offering</a>.</p>
            <OmnibarInput placeholder={'URL, IP address, domain, or file hash'}/>
            <UserAgreement/>
        </Omnibar>
    );
};

export default SearchTab;