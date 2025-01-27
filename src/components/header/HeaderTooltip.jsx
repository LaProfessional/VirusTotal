import React from 'react';
import classes from './Header-tooltip.module.css';

const HeaderTooltip = ({children, isVisible}) => {
    return (
        <div className={`${classes.headerTooltipContainer} ${isVisible ? '' : classes.hidden}`}>
            <div className={classes.headerTooltip}>{children}</div>
        </div>
    );
};

export default HeaderTooltip;