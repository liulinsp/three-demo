const express = require('express')
const app = express();

app.use(express.static('webroot'));
app.listen(3000, function () {
    console.log('Ready');
    var open = require("open");
    // open("http://localhost:3000", "Google Chrome.app");
	open("http://localhost:3000");
});