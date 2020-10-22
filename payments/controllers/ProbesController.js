class ProbesController {

    async handleLive(req, res) {
        res.send({ "ok": true })
    }

    async handleReady(req, res) {
        res.send({ "ok": true })
    }
}

module.exports = (repositories) => {

    var controller = new ProbesController()
    var express = require('express')
    var router = express.Router()

    router.get('/live', function (req, res) {
        controller.handleLive(req, res)
    })

    router.get('/ready', function (req, res) {
        controller.handleReady(req, res)
    })

    return router
}