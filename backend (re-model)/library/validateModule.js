const validator = require('fastest-validator');

function validateOrder(data) {

    const v = new validator();

    const schema = {
        totalPrice: { type: "number", integer: true, min: 1 },
        amount: { type: "number", positive: true, min: 1 },
        customerId: { type: "number", positive: true },
    }

    const result = v.validate(data, schema);

    console.log(`Validate.... result : ${result}`);

    return result;

}

function validateUserRegister(data, adata) {
    console.log("Validating......")
    const v = new validator();

    const schema = {
        email: { type: "email" },
        fname: { type: "string", min: 3, max: 255 },
        lname: { type: "string", min: 3, max: 255 },
        address: { type: "string", min: 3, max: 255 },
        tel: { type: "string", numeric: true },
    }

    const aSchema = {
        username: { type: "string", min: 3, max: 255 },
        password: { type: "string", pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])", min: 8, max: 255 }
    }

    const result = v.validate(data, schema);
    const aResult = v.validate(adata, aSchema);

    console.log(`Validate result : ${result} , ${aResult}`);

    return { customer_result: result, account_result: aResult };
}

function validateAdminRegister(data) {
    console.log("Validating......");
    const v = new validator();

    const schema = {
        fname: { type: "string", min: 3, max: 255 },
        lname: { type: "string", min: 3, max: 255 },
        username: { type: "email" },
        password: { type: "string", pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])", min: 8, max: 255 }
    }

    const result = v.validate(data, schema);

    console.log(`Validate result : ${result}`);

    return { result: result }
}


function validateAdminUserLogin(data) {
    console.log("Validating......");
    const v = new validator();

    const schema = {
        username: { type: "email" },
        password: { type: "string", pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])", min: 8, max: 255 }
    }

    const result = v.validate(data, schema);

    console.log(`Validate result : ${result}`);

    return { result: result }
}


function validateAddBook(data) {
    console.log("Validating......");
    const v = new validator();

    const schema = {
        book_name: { type: "string", min: 3, max: 255 },
        pb_year: { type: "number", positive: true, integer: true, convert: true },
        price: { type: "number", positive: true, integer: true, convert: true },
        book_amount: { type: "number", positive: true, integer: true, convert: true },
        description: { type: "string", min: 3, max: 1000 },
        author: { type: "string", min: 3, max: 255 },
        type: { type: "string", min: 3, max: 255 }
    }


    const result = v.validate(data, schema);
    console.log(`Validate result : ${result}`);

    return { result: result }
}


module.exports.validateOrder = validateOrder;
module.exports.validateUserRegister = validateUserRegister;
module.exports.validateAdminRegister = validateAdminRegister;
module.exports.validateAdminUserLogin = validateAdminUserLogin;
module.exports.validateAddBook = validateAddBook;