const environment = process.env.NODE.ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)

function getUsers(testConn) {
    const conn = testConn || connection
    return conn('users').select()
}

module.exports = {
    getUsers
}