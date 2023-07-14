import express from 'express';
const app = express();
import path from 'path';
const __dirname = path.resolve();

const port = process.env.PORT || 8080;

app.use( express.static(path.join(__dirname)));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port, err => {
	if (err) console.log('Error in server setup:', err);
	console.log('Server listening on:', port);
});
