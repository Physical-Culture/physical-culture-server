const express = require('express');
const router = express.Router();
const firebase = require('firebase');

router.get('/prac', (req, res) => {
	res.send("Practice route!");
});

module.exports = router;