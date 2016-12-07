var path = require('path');
// var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
// var fs = require('fs');

var staticPublic = path.join(__dirname, 'public');

var app = express();
var bikesData = require('./bikes');
var port = process.env.PORT || 3000;

Object.keys(bikesData).forEach(function (user) {});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(express.static(staticPublic));
// app.use(bodyParser.json());

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

app.get('/bikes-:bike', function(req, res, next) {

  var bike = bikesData[req.params.bike];

  if(bike) {
    res.status(200).render('bike-page', {

      title: bike.what,
      what: bike.what,
      where: bike.where,
      when: bike.when,
      serial: bike.serial,
      Owner: bike.Owner,
      details: bike.details,
      image: bike.image,
    });
  } else {

      next();
  }
});

// app.post('/ReportBike/LogBike', function( {
//
//     // if (req.body && req.body.what) {
//       bikesData.push({
//         bikes: 'knolly',
//         what: 'warden'
//       });
//       res.status(200).send();
//     // } else {
//       // res.status(400).send("Person photo must have a URL.");
//     // }
//
//   // } else { next(); }
// });
//

app.get('*', function (req, res) {

  res.status(404).render('404-page', {
    title: 'TodoIt'
  });
});

app.listen(port, function () {
  console.log("== Listening on port", port);
});
