import dayjs from "dayjs";


// Validations
export const Helpers = (name, data, required) => {
    switch (name) {
        case "name":
        case "surname":
            if (data === "" && required === true) {
                return { message: "This field is required!", Helpers: false };
            } else if (!/^$|[a-z]/gi.test(data)) {
                return { message: "Use only characters", Helpers: false };
            }
            return { message: "", Helpers: true };

        case "email":
            if (data === "" && required === true) {
                return { message: "Email is required!", Helpers: false };
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return { message: "Email must use this format name@example.com", Helpers: false };
            }
            return { message: "", Helpers: true };

        case "password":
            if (data === "" && required === true) {
                return { message: "Password is required!", Helpers: false };
            } else if (!/[\d()+-]/g.test(data)) {
                return { message: "Password must have number... ", Helpers: false };
            }
            return { message: "", Helpers: true };

        case "phone":
        case "tfno":
        case "telefono":
        case "phonenumber":
            if (data === "" && required === true) {
                return { message: "Mobile phone is required!", Helpers: false };
            } else if (!/^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/.test(target.data)){
                return { message: "Invalid phone format e.g +341234567", Helpers: false };
            }
            return { message: "", Helpers: true };
            
        default:
            console.log("Field not recognized");
    }
};
