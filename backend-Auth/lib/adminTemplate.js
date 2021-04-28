const FindAd = {
    byUser  : "SELECT * FROM ADMIN WHERE username = ?",
    userParams : "[req.body.username]",
} 

const RegisAdmin = {
    RegisScript : "INSERT INTO ADMIN (admin_fname, admin_lname, username, password) VALUES (?, ?, ?, ?) ",
    params      : "[admin.fname, admin.lname, admin.username, hash]"
}

module.exports.RegisAdmin = RegisAdmin;
module.exports.FindAd = FindAd;