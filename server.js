var debug = require('debug')('expressapp');
var open = require('open');

process.env.NODE_ENV = 'production';
var app = require('../app');

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
  open('http://localhost:' + app.get('port') + '/admin');
});