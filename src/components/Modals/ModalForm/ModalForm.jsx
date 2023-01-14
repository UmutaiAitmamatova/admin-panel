import React from 'react';
import { ModalFormConfigs } from './configs';
import { updateStudent, createStudent } from '../../../core/configs/firebase';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import Input from "../../common/Input";
import classes from './ModalForm.module.scss'

const ModalForm = ({
    userID,
    setActive,
    name,
    group,
    classs,
    imageURL,
    surname,
    age,
    handleChangeStudObj,
    studentObj,
    handleUbdate
}) => {
    const {registerOptions} = ModalFormConfigs();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const handleError = (errors) => { console.log(errors); };

    const handleModaleChange = () => {
        // event.preventDefault()
        if (userID) {
            const data = {
                name: name,
                surname: surname,
                age: age,
                imageURL: imageURL, 
                group: group,
                classs: classs
            }

            updateStudent(...data, userID)
            console.log(...data, 'data');
            Swal.fire(
                'Successfully updated student!',
                '',
                'success'
            )
            setActive(false)
        }
        else {
            createStudent(imageURL, name, surname, age,group,classs)
            Swal.fire(
                'Successfully added new student!',
                '',
                'success'
            )
        }
    }

    const onChangeInputs = (key, value) => {
        handleChangeStudObj(key, value)
    };

    return (
        <div className={classes.createStudents}>
            <div className={classes.inner} onClick={e => e.stopPropagation()}>
                <button onClick={() => setActive(false)} className={classes.closeBtn}>X</button>
                <form onSubmit={handleSubmit(handleModaleChange, handleError)}>
                    <div>
                        <Input
                            label={"Name"}
                            name={"name"}
                            type={"string"}
                            onChange={(e) => onChangeInputs(name, e.target.value)}
                            value={studentObj?.name || ""}
                            errors={errors}
                            register={register}
                            options={registerOptions}
                            handleUbdate={handleUbdate}
                        />
                    </div>
                    <div>
                        <Input
                            label={"Surname"}
                            name={"surname"}
                            type={"string"}
                            onChange={(e) => onChangeInputs("surname", e.target.value)}
                            value={studentObj?.surname || ""}
                            errors={errors}
                            register={register}
                            options={registerOptions}
                        />
                    </div>

                    <div>
                        <Input
                            label={"Age"}
                            name={"age"}
                            type={"number"}
                            onChange={(e) => onChangeInputs("age", e.target.value)}
                            value={studentObj?.age || ""}
                            errors={errors}
                            register={register}
                            options={registerOptions}
                        />
                    </div>

                    <div>
                        <Input
                            label={"Students image"}
                            name={"img"}
                            type={"text"}
                            onChange={(e) => onChangeInputs("img", e.target.value)}
                            value={studentObj?.img || ""}
                            errors={errors}
                            register={register}
                            options={registerOptions}
                        />
                    </div>

                    <div>
                        <Input
                            label={"Group A / B / C / D"}
                            name={"group"}
                            type={"text"}
                            onChange={(e) => onChangeInputs("group", e.target.value)}
                            value={studentObj?.group || ""}
                            errors={errors}
                            register={register}
                            options={registerOptions}
                        />
                    </div>

                    <div>
                        <Input
                            label={"Group A / B / C / D"}
                            name={"class"}
                            type={"number"}
                            onChange={(e) => onChangeInputs("class", e.target.value)}
                            value={studentObj?.class || ""}
                            errors={errors}
                            register={register}
                            options={registerOptions}
                        />
                    </div>
                    <button className={classes.btn} type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ModalForm;
