const express = require('express');
const router = express.Router();

router.get('/'(req, res)=>{
    obj = {
        a: 'kanak',
        number: 35
    }
    res.json(obj)
})
modile.exports = router