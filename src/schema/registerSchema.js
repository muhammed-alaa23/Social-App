import * as zod from 'zod';


export const registerSchema = zod.object({
    name: zod.string()
    .nonempty("Name Is Required")
    .min(3, "Name Must Be At Least 3 Characters")
    .max(20, "Name Must Be At Most 20 Characters"),
    email: zod.string()
    .nonempty("Email Is Required")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Invalid Email Address"),
    password: zod.string()
    .nonempty("Password Is Required")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password Must Be At Least 8 Characters, Include At Least One Uppercase Letter, One Lowercase Letter, One Number, and One Special Character"),
    rePassword: zod.string(),
    dateOfBirth: zod.coerce.date().refine((date) => {
        const birthDate = date.getFullYear();
        const age = new Date().getFullYear();
        const currentDate = age - birthDate;
        return currentDate >= 18;
    }, { message: "Age Must Be Over 18" }),
    gender: zod.string()
    .nonempty("Gender Is Required")
    .regex(/^(male|female)$/, "Invalid Gender")

}).refine((data) => data.password === data.rePassword, {message: "Passwords Must Match",path: ["rePassword"],});
