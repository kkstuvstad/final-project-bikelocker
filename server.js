var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var staticPublic = path.join(__dirname, 'public');

var app = express();
// var usersData = require('./users-data');
var port = process.env.PORT || 3000;

// Object.keys(usersData).forEach(function (user) {
//   if (usersData[user]) {
//     usersData[user].userName = true;
//   }
// });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(express.static(staticPublic));

app.get('/', function(req, res) {

  res.status(200).render('index-page', {
    title: 'TheBikeLocker',
    // user: usersData
  });
});

app.get('/BikeLocker', function(req, res) {
  res.status(200).render('BikeLocker', {
    title: 'Locker',
  });
});

app.get('/AddBike', function(req, res) {
  res.status(200).render('AddBike-page', {
    title: 'Add to Locker',
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
