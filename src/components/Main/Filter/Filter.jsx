import React, {useState} from "react";
import classes from "./Filter.module.scss";

const Filter = ({ setSearch,getSelectedRadioValue }) => {
    const [radioValue, setRadioValue] = useState("all")
    const handleFilters = (e) => {
        setSearch((search) =>({...search,[e.target.name]: e.target.value}))
    }
    const handleRadioButton = (e) => {
        console.log(e)
        setRadioValue(e)
        getSelectedRadioValue(e)
    }
    return (
        <div className={classes.contentFilters}>
            <div className={classes.container}>
                <p className={classes.p}>filters:</p>

                <div className={classes.filters}>
                    <div className={classes.item}>
                        <label htmlFor="firstname">Name</label> <br />
                        <input type="text" name="name" onChange={handleFilters}/>
                    </div>

                    <div className={classes.item}>
                        <label htmlFor="age">Age</label> <br />
                        <input type="number" name="age" onChange={handleFilters}/>
                    </div>

                    <div className={classes.item}>
                        <label htmlFor="A">A</label>
                        <input type="radio" checked={radioValue === "A"} id="A" onClick={(e) => handleRadioButton(e.target.value)} name="A" value="A" />
                        <label htmlFor="B">B</label>
                        <input type="radio" checked={radioValue === "B"}  onClick={(e) => handleRadioButton(e.target.value)} name="B" value="B" />
                        <label htmlFor="C">C</label>
                        <input type="radio" checked={radioValue === "C"} onClick={(e) => handleRadioButton(e.target.value)} name="C" value="C" />
                        <label htmlFor="D">D</label>
                        <input type="radio" checked={radioValue === "D"}  onClick={(e) => handleRadioButton(e.target.value)} name="D" value="D"/>
                        <button className={classes.btn} onClick={() => handleRadioButton("all")}>all</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Filter;