import React from 'react';

import styles from './Modal-window.module.css';

const UserAgreement = () => {
    return (
        <p className={styles.userAgreement}>By submitting data above, you are agreeing to our <a href="#" className={styles.consent}>Terms
            of Service</a> and <a href="#" className={styles.consent}>Privacy Notice</a> and to the
            <strong>sharing of your Sample submission with the security community.</strong>
            Please do not submit any personal information; we are not responsible for the contents of your submission.
            <a href="#" className={styles.consent}> Learn more.</a>
        </p>
    );
};

export default UserAgreement;