//Find User Template
const Find = {
    userByEmail         : "SELECT * FROM CUSTOMER WHERE customer_email=?",
    emailParams         : "[user.customer.email]",
    userByUsername      : "SELECT * FROM USERS WHERE username = ?",
    usernameParams      : "[req.body.username]",
    userByJwtId         : "SELECT username FROM USERS WHERE id = ?",
    JwtIdParams         : "[jwt_payload.sub]",
    userIdByName        : "SELECT customer_id FROM CUSTOMER WHERE customer_fname = ? AND customer_lname = ? AND customer_email=?",
    nameParams          : "[user.customer.fname, user.customer.lname, user.customer.email]"
}

const FindAcc = {
    script : "SELECT * FROM CUSTOMER c JOIN ACCOUNTS a ON c.customer_id = a.CUSTOMER_customer_id WHERE c.customer_email = ?",
    params : "[req.body.username]",
    Jwtscript : "SELECT * FROM CUSTOMER c JOIN ACCOUNTS a ON c.customer_id = a.CUSTOMER_customer_id WHERE c.customer_id = ?",
    JwtIdparams : "[jwt_payload.sub]",
    // Jwtscript2  : "SELECT c.customer_id, c.customer_fname, c.customer_lname, c.customer_address, c. FROM CUSTOMER c JOIN ACCOUNTS a ON c.customer_id = a.CUSTOMER_customer_id WHERE c.customer_id = ?",
   
}


//Register Template

const Register = {
    cusScript : "INSERT INTO CUSTOMER(customer_fname, customer_lname, customer_address, customer_email, customer_tel) VALUES (?, ?, ?, ?, ?);",
    cusParams : "[user.customer.fname, user.customer.lname, user.customer.address, user.customer.email, user.customer.tel]",

    accScript : `INSERT INTO ACCOUNTS (username, password, CUSTOMER_customer_id) VALUES (?, ?, ?)`,
    accParams : "[user.account.username, hash, findId[0][0].customer_id]",

    success   : {
        status  : true,
        massage : 'Register Success, You can login in 1-3 minutes',
    },

    duplicate : {
        status  : false,
        massage : 'This email has already registered'
    },

    jwtToken : "jwtToken"
}

//Response Massage Template

const ErrMassage = {
    status  : false,
    massage : "Something went wrong !" ,
    error   : "err", //need eval
}

module.exports.Find = Find;
module.exports.FindAcc = FindAcc;
module.exports.Register = Register;
module.exports.ErrMassage = ErrMassage;