import React, {useRef, useState} from 'react';

import styles from './Modal-window.module.css';

const ChooseFileButton = () => {

    const [isVisibleTooltip, setVisibleTooltip] = useState(null);

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
        <div>
            <button className={styles.btnChooseFile}
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}

            >Choose file</button>

            <div className={`${styles.tooltipContainer} ${isVisibleTooltip ? '' : styles.hidden}`}>
                <div className={styles.tooltip}>Max size 650MB</div>
            </div>
        </div>

    );
};

export default ChooseFileButton;