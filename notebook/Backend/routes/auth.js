const express = require('express');
const router = express.Router();
const User = require('../models/User');



// creating a user using POST Methode "/api/auth/". Doesn't require Auth
router.get('/', (req, res)=>{
   
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})
module.exports = router