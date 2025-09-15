import * as zod from 'zod';


export const loginSchema = zod.object({
   
    email: zod.string()
    .nonempty("Email Is Required")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Invalid Email Address"),
    password: zod.string()
    .nonempty("Password Is Required")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password Must Be At Least 8 Characters, Include At Least One Uppercase Letter, One Lowercase Letter, One Number, and One Special Character"),
})
