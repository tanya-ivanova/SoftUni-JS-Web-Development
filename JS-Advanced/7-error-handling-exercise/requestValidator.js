function solve(httpObject) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /^[a-z0-9\.]+$/;
    let messagePattern = /^[^<>&'"\\]+$/;    

    if(!methods.includes(httpObject.method) || httpObject.method === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let matchUri = uriPattern.exec(httpObject.uri);

    if((matchUri === null && httpObject.uri !== '*') || httpObject.uri === undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!versions.includes(httpObject.version) || httpObject.version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let matchMessage = messagePattern.exec(httpObject.message);

    if((matchMessage === null && httpObject.message !== '') || httpObject.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObject;
}

solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  });
