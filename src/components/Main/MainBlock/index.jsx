import React from "react";
import classes from './MainBlock.module.scss'

const MainBlock = ({student}) => {
    return (
        <div className={classes.contentBlock}>
            <div>
            <img height={150} width={180} src={student.imageURL} alt="imageURL" />
            </div>
            <div className={classes.name}>
                <span className={classes.span}>Name: </span>{student.name}
            </div>
            <div className={classes.surtitle}>
                <span className={classes.span}>Surname: </span> {student.surname}
            </div>
            <div className={classes.age}>
                <span className={classes.span}>Age: </span>{student.age}
            </div>
            <div className={classes.group}>
                <span className={classes.span}>Group: </span>{student.group}
            </div>
            <div className={classes.class}>
                <span className={classes.span}>Class: </span>{student.classs}
            </div>
        </div>
    );
};

export default MainBlock;
