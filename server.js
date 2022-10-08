const app = require('express')();

app.get('/', (req, res) => res.send('Hello!.'));

module.exports = () => {
  app.listen(3000);
}
/*var express = require('express');
var http = require('http');
var app = express();

// Ping the app
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
	response.sendStatus(200);
});

// Request listener
var listener = app.listen(process.env.PORT || 3000, function() {
 console.log('[SERVER]: Hola!, estoy escuchando en el puerto ' + listener.address().port);
});
setInterval(() => {
	http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
*/