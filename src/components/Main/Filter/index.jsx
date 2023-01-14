import React, {useState} from "react";
import classes from "./Filter.module.scss";

const Filter = ({ setSearch,getSelectedRadioValue,getSelectedClassValue }) => {
    const [radioValue, setRadioValue] = useState("all")
    const [selectedClass, setSelectedclass] = useState("all");

    const handleFilters = (e) => {
        setSearch((search) =>({...search, [e.target.name]: e.target.value}))
    }
    const handleRadioButton = (e) => {
        console.log(e)
        setRadioValue(e)
        getSelectedRadioValue(e)
    }
    const handleSelectClass = (el) => {
        console.log(el.target.value)
        setSelectedclass(el.target.value)
        getSelectedClassValue(el.target.value)
    };
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
                        <p>group</p>
                        <form>
                        <label htmlFor="A">A</label>
                        <input type="radio" checked={radioValue === "A"} id="A" onClick={(e) => handleRadioButton(e.target.value)} name="A" value="A" />
                        <label htmlFor="B">B</label>
                        <input type="radio" checked={radioValue === "B"}  onClick={(e) => handleRadioButton(e.target.value)} name="B" value="B" />
                        <label htmlFor="C">C</label>
                        <input type="radio" checked={radioValue === "C"} onClick={(e) => handleRadioButton(e.target.value)} name="C" value="C" />
                        <label htmlFor="D">D</label>
                        <input type="radio" checked={radioValue === "D"}  onClick={(e) => handleRadioButton(e.target.value)} name="D" value="D"/>
                        <button className={classes.btn} value="all" onClick={(e) => handleRadioButton(e.target.value)}>all</button>
                        </form>
                    </div>

                    <div className={classes.item}>
                        <p>class</p>
                        <select name="class_student"  onChange={handleSelectClass}>
                            <option onClick={() => handleSelectClass("all")} value="all">all</option>
                            <option checked={selectedClass === "1"} value="1">1</option>
                            <option checked={selectedClass === "2"} value="2">2</option>
                            <option checked={selectedClass === "3"} value="3">3</option>
                            <option checked={selectedClass === "4"} value="4">4</option>
                            <option checked={selectedClass === "5"} value="5">5</option>
                            <option checked={selectedClass === "6"} value="6">6</option>
                            <option checked={selectedClass === "7"} value="7">7</option>
                            <option checked={selectedClass === "8"} value="8">8</option>
                            <option checked={selectedClass === "9"} value="9">9</option>
                            <option checked={selectedClass === "10"} value="10">10</option>
                            <option checked={selectedClass === "11"} value="11">11</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Filter;