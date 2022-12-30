import React from 'react';
import classes from './Filter.module.scss'

const Filter = () => {
    return (
        <div className={classes.contentFilters}>
            <p className={classes.p}>filters:</p>
            <div className={classes.filters}>group</div>
            <div className={classes.filters}>age</div>
            <div className={classes.filters}>class</div>
        </div>
    );
}

export default Filter;
