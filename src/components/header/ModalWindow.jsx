import React from 'react';
import classes from './modal-window.module.css'

import {ReactComponent as ScanFile} from "../../assets/modal-window/scan-file.svg";

const ModalWindow = ({visible, setVisible}) => {

    const rootClasses = [classes.modalWindowContainer];

    if (visible) rootClasses.push(classes.active);

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                <ScanFile />
                <button className={classes.btnChooseFile}>Choose file</button>
                <p className={classes.userAgreement}>By submitting data above, you are agreeing to our <a href="#" className={classes.consent}>Terms
                    of Service</a> and <a href="#" className={classes.consent}>Privacy Notice</a> and to the
                    <strong>sharing of your Sample submission with the security community.</strong>
                    Please do not submit any personal information; we are not responsible for the contents of your submission.
                    <a href="#" className={classes.consent}> Learn more.</a>
                </p>
            </div>
        </div>
    );
};

export default ModalWindow;