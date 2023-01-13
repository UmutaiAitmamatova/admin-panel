export const LoginPageConfigs = () => {
    const registerOptions = {
        email: { 
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
                message: 'Please enter a valid email address'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "password is not correct"
            }
        }
    };
    return{
        registerOptions
    }
}