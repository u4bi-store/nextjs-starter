const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const is_sls = process.env.IS_SLS === 'true'
const dev = is_sls ? false : process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()

server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
})

server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
})

server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
})

server.get('*', (req, res) => {
    return handle(req, res)
})


const prepare = app.prepare().then(_ => {

    !is_sls && server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})


module.exports = {
    server : server,
    prepare
}