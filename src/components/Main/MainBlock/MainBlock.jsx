import React from "react";
import classes from './MainBlock.module.scss'

const MainBlock = ({ name, surName, age, group, classs }) => {
    return (
        <div className={classes.contentBlock}>
            <div className={classes.img}></div>
            <div className={classes.surtitle}>
                <span className={classes.span}>surname: </span> {surName}
            </div>
            <div className={classes.name}>
                <span className={classes.span}>name: </span>{name}
            </div>
            <div className={classes.age}>
                <span className={classes.span}>age: </span>{age}
            </div>
            <div className={classes.group}>
                <span className={classes.span}>group: </span>{group}
            </div>
            <div className={classes.class}>
                <span className={classes.span}>class: </span>{classs}
            </div>
        </div>
    );
};

export default MainBlock;
