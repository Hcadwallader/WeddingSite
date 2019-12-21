
//
// This script starts an express server and serves up the bundle.js within production
//

var path = require('path');
var express = require('express');

var app = express();

// app.use(express.static(path.join(__dirname, '/dist')));
//
// app.get('/*', function(req, res){
//     res.sendFile("index.html", {root: path.join(__dirname, '/dist')});
// });

// app.set('appPath', 'public');
// app.use(express.static(__dirname));
app.use(express.static('public'));
app.use(express.static('dist'));

// app.route('/dist/*')
//     .get(function(req, res) {
//         console.log("get /dist/* called");
//     });
app.route('/*')
    .get(function(req, res) {
        console.log("get /* called");
        res.sendfile('public/index.html');
    });

app.listen(80, function() {
    console.log("App is running at localhost: 80")
});