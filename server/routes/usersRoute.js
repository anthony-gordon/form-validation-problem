const express = require('express')
const router = express.Router()
var db = require('../db')

router.get('/', function (req, res){
    db.getUsers()
    .then(users => {
        res.json(users)
    })
})

module.exports = router