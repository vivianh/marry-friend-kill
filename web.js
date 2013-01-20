/* http://expressjs.com/guide.html */

var express = require('express'),
app = express.createServer();
app.use(express.static(__dirname + "/static"));
app.get('/helloWorld.txt', function(req, res) {
  res.send('hello, world' + '<br/><br/>' + new Date());
});

/* LOGIC FOR "NEXT SMALL CHANGE" */
var changes = [
  [615475607, 'refactor demo app'],
  [4, 'invent facebook'],
  [1399037205, 'add some fake data to the demo app']
];
var sendChanges = function(res) {
  res.send(JSON.stringify(changes));
};
app.get('/getChanges', function(req, res) {
  sendChanges(res);
});
app.get('/addChange', function(req, res) {
  var userId = req.query['userId'];
  var change = req.query['change'];
  changes.unshift([userId, change]);
  sendChanges(res);
});

/* YOUR_APP_LOGIC */

port = process.env.PORT || 5000
app.listen(port)
console.log('Express server started on port %s', port);
