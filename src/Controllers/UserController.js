const MainController = require('./MainController');
let _this;
class UserController extends MainController { 
    constructor($app) {
        super($app);
        _this = this;
        this.UserModel = new this.repository('User');
    }

    Routes($path) { 
        this.app.get(`${$path}`, this.UserIndex);
    }

    async UserIndex(req, res) { 
        try {
            const users = await _this.UserModel.count();
            res.send(`Total users: ${users}`);
        } catch (error) {
            res.send('Error!');
        }        
    }
}

module.exports = UserController;