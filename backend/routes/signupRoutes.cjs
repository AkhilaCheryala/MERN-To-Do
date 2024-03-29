const express = require('express');
const router = express.Router();
const User = require('../models/User.cjs');
 router.post('/signup', async (req,res)=>{
    try{
        const{username,email,password} = req.body;
        const newUser =new User({username,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
res.status(400).json({message:'not successfull'});
    }
 });
 module.exports = router;