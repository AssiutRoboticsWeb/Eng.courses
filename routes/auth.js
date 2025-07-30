const express = require('express');
const router = express.Router();

const passport = require('./passport');



// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    // إصدار JWT
    // const token = generateToken({ id: req.user._id });
    const user = req.user;


    res.redirect
    res.json({ user });
  }
);



module.exports=router