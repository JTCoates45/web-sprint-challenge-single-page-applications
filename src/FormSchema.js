import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .required('Name is required!')
    .min(2, "name must be at least 2 characters"),
    email: yup
    .string()
    .required('Email is required!')
    .email('Must be a valid email address!'),
    size:yup
    .string()
    .oneOf(['Kids', 'Small', 'Medium', 'Large',], 'What size would you like your pizza?'),
    address:yup
    .string(),
    Bacon: yup.boolean(),
    Pineapple: yup.boolean(),
    Sardines: yup.boolean(),
    Anchovies: yup.boolean()
})

export default schema;