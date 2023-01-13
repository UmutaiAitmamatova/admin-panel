export const ModalFormConfigs = () => {
    const registerOptions = {
        name: {
            required: "Name is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        },
        surname: {
            required: "Surname is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            }
        },
        age: {
            required: "Age student is required",
            minLength: {
                value: 1,
                message: 'must be more than 1 characters'
            },
            maxLength: {
                value: 2,
                message: 'enter the correct age'
            },
        },
        img: {
            required: "Image student is required",
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                message: 'Invalid Url student'
            }
        },
        group: {
            required: "Group student is required",
        },
        class: {
            required: "Class student is required",
            min: {
                value: 1,
                message: 'minimum value 1'
            },
            max: {
                value: 11,
                message: 'maximum value 11'
            },
        }
    };

    return{
        registerOptions
    }
}