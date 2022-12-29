import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <div className="contentFilters">
            <p className="contentP">filters:</p>
            <div className="filters">group</div>
            <div className="filters">age</div>
            <div className="filters">class</div>
        </div>
    );
}

export default Filter;
