const argon  = require('argon2')

async function genPassword ( password ) {
        const genHash = await argon.hash(password)
        return genHash
}

async function validPassword (password, hash) {
    const hashVerify = await argon.verify(hash, password)
    return hashVerify
}

module.exports.genPassword = genPassword
module.exports.validPassword = validPassword