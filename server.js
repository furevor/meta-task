const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || port, () => {
	var port = server.address().port;
	console.log("App now running on port", port);
});

