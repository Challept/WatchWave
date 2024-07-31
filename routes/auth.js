// routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('../config-passport');

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.get('/auth/apple', passport.authenticate('apple'));
router.get('/auth/apple/callback', passport.authenticate('apple', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

module.exports = router;