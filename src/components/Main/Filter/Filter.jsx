import React from "react";
import classes from "./Filter.module.scss";

const Filter = ({ setSearch }) => {

    const handleFilters = (e) => {
        setSearch((search) =>({...search,[e.target.name]: e.target.value}))
    }

    return (
        <div className={classes.contentFilters}>
            <div className={classes.container}>
                <p className={classes.p}>filters:</p>

                <div className={classes.filters}>
                    <div>
                        <label htmlFor="firstname">Name</label>
                        <input type="text" name="name" onChange={handleFilters}/>
                    </div>

                    <div>
                        <label htmlFor="firstname">Age</label>
                        <input type="number" name="firstname" onChange={handleFilters}/>
                    </div>

                    <div>
                        <label htmlFor="firstname">A</label>
                        <input type="radio" name="firstname" />
                        <label htmlFor="firstname">B</label>
                        <input type="radio" name="firstname" />
                        <label htmlFor="firstname">C</label>
                        <input type="radio" name="firstname" />
                        <label htmlFor="firstname">D</label>
                        <input type="radio" name="firstname" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;