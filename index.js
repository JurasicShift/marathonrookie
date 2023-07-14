import express from 'express';
const app = express();
import path from 'path';
const __dirname = path.resolve();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'views')));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/10k5k', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/10k5k.html'));
});

app.get('/aidstations', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/aidstations.html'));
});

app.get('/articles', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/articles.html'));
});

app.get('/contact', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/contact.html'));
});

app.get('/crosstraining', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/crosstraining.html'));
});

app.get('/ebooks', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/ebooks.html'));
});

app.get('/faqs', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/faqs.html'));
});

app.get('/half', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/half.html'));
});

app.get('/heartrate', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/heartrate.html'));
});

app.get('/hydration', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/hydration.html'));
});

app.get('/injuryprevention', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/injuryprevention.html'));
});

app.get('/inspirationalstories', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/inspirationalstories.html'));
});

app.get('/itband', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/itband.html'));
});

app.get('/marathon', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/marathon.html'));
});

app.get('/motivation', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/motivation.html'));
});

app.get('/newsletter', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/newsletter.html'));
});

app.get('/nutrition', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/nutrition.html'));
});

app.get('/racedaytips', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/racedaytips.html'));
});

app.get('/rookiemistakes', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/rookiemistakes.html'));
});

app.get('/rungear', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/rungear.html'));
});

app.get('/runningform', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/runningform.html'));
});

app.get('/runningmovies', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/runningmovies.html'));
});

app.get('/safetyfirst', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/safetyfirst.html'));
});

app.get('/shinsplints', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/shinsplints.html'));
});

app.get('/storedirectory', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/storedirectory.html'));
});

app.get('/stretching', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/stretching.html'));
});

app.get('/thewall', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/thewall.html'));
});

app.get('/weighttraining', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/weighttraining.html'));
});


app.listen(port, err => {
	if (err) console.log('Error in server setup:', err);
	console.log('Server listening on:', port);
});
