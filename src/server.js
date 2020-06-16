
//
// This script starts an express server and serves up the bundle.js within production
//

var express = require('express');

var app = express();

// serve everything under the path directly from the directory on the box
// app.use('/{PATH}', express.static('{DIR_ON_BOX}'));
app.use('/images', express.static('images'));
app.use('/fonts', express.static('fonts'));
app.use('/dist', express.static('dist'));

// for every other path, just give them index.html
app.route('/*')
    .get(function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });

// TODO: switch this too port 80
app.listen(3000, function() {
    console.log("App is running at localhost: 3000")
});