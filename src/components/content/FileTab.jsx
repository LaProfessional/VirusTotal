import React from 'react';
import Omnibar from "./Omnibar";

import ChooseFileButton from "../modal-window/ChooseFileButton";
import UserAgreement from "../modal-window/UserAgreement";

import {ReactComponent as ScanFile} from "../../assets/modal-window/scan-file.svg";

const FileTab = () => {
    return (
        <Omnibar>
            <ScanFile/>
            <ChooseFileButton/>
            <UserAgreement/>
        </Omnibar>
    );
};

export default FileTab;