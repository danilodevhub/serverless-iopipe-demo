exports.handler = (event, context, callback) => {
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