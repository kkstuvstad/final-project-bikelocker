var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var staticPublic = path.join(__dirname, 'public');

var app = express();
var bikesData = require('./bikes');
var port = process.env.PORT || 3000;

Object.keys(bikesData).forEach(function (user) {});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(express.static(staticPublic));

app.get('/', function(req, res) {

  res.status(200).render('index-page', {
    title: 'TheBikeLocker',
  });
});

app.get('/BikeLocker', function(req, res) {

  res.status(200).render('Locker', {
    title: 'Locker',
    bikes: bikesData,
  });
});

app.get('/ReportBike', function(req, res) {
  res.status(200).render('AddBike-page', {
    title: 'Report Stolen',
  });
});

app.get('/bikes-:bike', function(req, res) {

  var bike = bikesData[req.params.bike];

    res.status(200).render('bike-page', {

      title: 'bikes',
      what: bike.what,
      name: bike.name,
    });
});


app.get('*', function (req, res) {

  res.status(404).render('404-page', {
    title: 'TodoIt'
  });
});

app.listen(port, function () {
  console.log("== Listening on port", port);
});
