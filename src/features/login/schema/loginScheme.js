import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    password: yup
        .string()
        .required('Please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    email: yup.string().email("Please enter a valid email").required("Please enter your email")
})

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Please enter your email")
})

export const resetPasswordSchema = yup.object().shape({
    confirmPassword: yup.string().required('Please Enter your confirm password'),
    newPassword: yup
        .string()
        .required('Please enter your new password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
})