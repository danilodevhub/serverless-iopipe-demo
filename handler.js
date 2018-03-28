'use strict';

const hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

const withError = (event, context, callback) => {

  const erro = variavelQueNaoExiste.atributo;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

const withTrace = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Olá eu tenho trace =)'
    }),
  };

  context.iopipe.mark.start('database');
  setTimeout(() => {
    // after database call is finished
    context.iopipe.mark.end('database');

    context.iopipe.mark.start('qqr-outra-coisa');
    setTimeout(() => {
      // after analytics call is finished
      context.iopipe.mark.end('qqr-outra-coisa');

      callback(null, response);
    }, 1000);

  }, 2000);
  
};

module.exports = { hello, withError, withTrace };