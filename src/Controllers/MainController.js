class MainController { 
    constructor($app) { 
        this.app = $app;
        this.middleware = require('../Routes/middleware');
        this.repository = require('../../core/Repository');
    }

    Routes($path) {
        this.app.get(`${$path}`, this.middleware.XHR, this.Index);
    }

    Index(req, res) {
        res.send('Hello World!');
    }
}

module.exports = MainController;