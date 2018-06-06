const environment = process.env.NODE.ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)



function addUser (user, testConn) {
    const conn = testConn || connection
    return conn('users').insert(user)
}

module.exports = {
    addUser: addUser
}