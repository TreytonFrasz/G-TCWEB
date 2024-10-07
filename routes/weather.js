var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('Weather', { title: 'Weather Search' });
});

//TODO: Garrett fixes this part:

// document.getElementById('weatherForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const location = document.getElementById('locationInput').value;
//     const apiKey = ''; // Replace with API key
//     const url = ``;
//
// });

module.exports = router;