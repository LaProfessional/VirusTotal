import React from 'react';

import Omnibar from "./Omnibar";
import OmnibarInput from "./OmnibarInput";

import {ReactComponent as Web} from "../../assets/omnibar/web.svg";
import UserAgreement from "../modal-window/UserAgreement";

const UrlTab = () => {



    return (
        <Omnibar>
            <Web/>
            <OmnibarInput placeholder={'Search or scan a URL'}/>
            <UserAgreement/>
        </Omnibar>
    );
};

export default UrlTab;