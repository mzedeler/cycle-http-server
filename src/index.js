import {Rx} from '@cycle/core';
import http from 'http';

function createServer() {
    var subject = new Rx.Subject();
    subject.server = http.createServer(function (request, response)
    {
       subject.onNext({ req:request, res:response });
    });

    subject.listen = function(port) {
      console.log("Server is listening on port " + port);
      subject.server.listen(port);
    }

    return subject;
};

function makeServerDriver() {

  return createServer;

}

export default makeServerDriver;
export {makeServerDriver};
