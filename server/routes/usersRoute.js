const express = require('express')
const router = express.Router()
var usersDb = require('../db')


router.post('/', (req, res) => {
    let db = req.app.get('db')
    console.log("in post")
    usersDb.addUser(req.body, db)
            .then(user => res.json(user))
        .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))  
})

module.exports = router