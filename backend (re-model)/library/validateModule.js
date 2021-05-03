const validator = require('fastest-validator');

function validateOrder ( data ) {
    
    const v = new validator();

    const schema = {
        totalPrice : { type: "number", integer : false},
        amount     : { type: "number", positive: true },
        customerId : { type: "number", positive: true },
    }

    const result = v.validate(data, schema);

    console.log(`Validate.... result : ${result}`);

    return result;
   
}

module.exports.validateOrder = validateOrder;