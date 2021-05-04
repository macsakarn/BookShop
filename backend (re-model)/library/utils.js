const argon  = require('argon2')
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8')

async function genPassword ( password ) {
    const genHash = await argon.hash( password )
    return genHash
}

async function validPassword ( password, hash ) {
    const hashVerify = await argon.verify(hash, password)
    return hashVerify
}

function issueJWT( user ) {
    const _id = user.customer_id;
    const _email = user.customer_email;
    const _tel = user.customer_tel;
    const expiresIn = '1d';
  
    const payload = {
      sub: _id,
      email : _email,
      tel      : _tel,
      role     : "customer",
      iat: Date.now()
    };
  
    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
  
    return {
      token: "Bearer " + signedToken,
      expires: expiresIn
    }
}

function issueAdminJWT( user ) {

  const _sub = user.admin_id;
  const _username = user.username;
  const _fname = user.fname;
  const expiresIn = '1d';
  const payload = {
    sub : _sub,
    username : _username,
    fname    : _fname,
    role     : "I'm admin",
    padlock  : 1560320,
    iat: Date.now()
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  }
}

module.exports.genPassword = genPassword;
module.exports.validPassword = validPassword;
module.exports.issueJWT = issueJWT;
module.exports.issueAdminJWT = issueAdminJWT;
