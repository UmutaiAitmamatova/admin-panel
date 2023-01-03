import React from "react";
import { getFilter } from "../../../firebase";
import classes from "./Filter.module.scss";

const Filter = ({ student, setListOfStudents }) => {
    const [filterStudents, setFilterStudents] = React.useState({ name: '', age: null, classs: null, group: ''});
    console.log(filterStudents);

    const handleFilters = (e) => {
        setFilterStudents({ ...filterStudents, [e.target.name]: e.target.value })
    }

    const filterOfStudent = () => {
        let filledFilters = getFilter(filterStudents);
        let filledFilterStudents = student.filter(elem => {
            return Object.entries(filledFilters).every(([key, value]) => {
                if (key === 'name') {
                    return !elem[key].indexOf(value)
                } else {
                    return elem[key] === value
                }
            })
        })
        setListOfStudents(filledFilterStudents)
    }

    React.useEffect(() => {
        filterOfStudent()
    }, [filterStudents])

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
