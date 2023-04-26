// VALIDATIONS.
export const Helpers = (name, data, required) => {
    switch (name) {
        case "name":
        case "surname":
            if (data === "" && required === true) {
                return { message: "This field is required!", Helpers: false };
            } else if (!/^$|[a-z]/gi.test(data)) {
                return { message: "Use only characters", Helpers: false };
            } else if (data.length > 10) {
                return { message: "Maximum length is 10 characters", Helpers: false };
            }
            return { message: "", Helpers: true };

        case "email":
            if (data === "" && required === true) {
                return { message: "Email is required!", Helpers: false };
            } else if (
                !/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/.test(data)
            ) {
                return { message: "Email must use this format name@example.com", Helpers: false };
            }
            return { message: "", Helpers: true };

        case "password":
            if (data === "" && required === true) {
                return { message: "Password is required!", Helpers: false };
            } else if (
                !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data)
            ) {
                return { message: "Password must be at least 8 characters long and contain at least one letter and one number", Helpers: false };
            }
            return { message: "", Helpers: true };

        case "role_id":
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
            } else if (!/^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/.test(data)) {
                return { message: "Invalid phone number", Helpers: false };
            }
            return { message: "", Helpers: true };

        default:
            console.log("Field not recognized");
    }
};
