import React from 'react';
import styles from './ModalWindow.module.css'

import ChooseFileButton from "./ChooseFileButton";
import UserAgreement from "./UserAgreement";

import {ReactComponent as ScanFile} from "../../assets/modal-window/scan-file.svg";

const ModalWindow = ({visible, setVisible}) => {

    const rootClasses = [styles.modalWindowContainer];

    if (visible) rootClasses.push(styles.active);

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <ScanFile />
                <ChooseFileButton />
                <UserAgreement />
            </div>
        </div>
    );
};

export default ModalWindow;