import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    password: yup.string().required().min(6).max(10),
    user_name: yup.string().required().min(5).max(15)
})