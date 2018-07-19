const iopipeLib = require('iopipe');
const tracePlugin = require('iopipe-plugin-trace');

const iopipe = iopipeLib({
  plugins: [tracePlugin()]
});

exports.handler = iopipe((event, context, callback) => {
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
});