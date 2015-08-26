'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cycleCore = require('@cycle/core');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function createServer() {
  var subject = new _cycleCore.Rx.Subject();
  subject.server = _http2['default'].createServer(function (request, response) {
    subject.onNext({ req: request, res: response });
  });

  subject.listen = function (port) {
    console.log("Server is listening on port " + port);
    subject.server.listen(port);
  };

  return subject;
};

function makeServerDriver() {

  return createServer;
}

exports['default'] = makeServerDriver;
exports.makeServerDriver = makeServerDriver;
