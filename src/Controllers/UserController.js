const MainController = require('./MainController');

class UserController extends MainController { 
    constructor($app) {
        super($app);
    }

    Routes($path) { 
        this.app.get(`${$path}`, this.UserIndex);
    }

    UserIndex(req, res) { 
        res.send('Hello User!');
    }
}

module.exports = UserController;