const awsServerlessExpress = require('aws-serverless-express')
const app = require('./server')

const server = awsServerlessExpress.createServer(app.server)

module.exports.hello = (event, context) => {

    app.prepare.then(_ => 
        awsServerlessExpress.proxy(server, event, context))

}