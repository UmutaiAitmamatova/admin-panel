export const RegistrationPageConfig = () => {
    const registerOptions = {
        email: { 
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
                message: '"Please enter a valid email address" (you entered the data in the wrong format)'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };
    return {
        registerOptions
    }
}