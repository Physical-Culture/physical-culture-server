let express = require('express');
let path = require('path');
let http = require('http');
let bodyParser = require('body-parser');
let cors = require('cors');
let helmet = require('helmet');
let compression = require('compression');

let api_placeholder = require('./routes/api_placeholder');

const app = express();

app.use(compression());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/** Routes here **/
app.use('/place', api_placeholder);
app.use('/api', (req, res) => {
	res.send("Sahhh dude");
	return;
});

let port = process.env.PORT || '8080';
app.set('port', port);

http.createServer(app).listen(port, () => console.log(`The api is running on port: ${port}`));
