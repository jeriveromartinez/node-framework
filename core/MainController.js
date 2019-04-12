class MainController {
    constructor($app) {
        this.app = $app;
        this.middleware = require('../src/Routes/middleware');
        this.repository = require('./Repository');
    }

    Routes($path) { }
}

module.exports = MainController;