const MainController = require('../../core/MainController');

class UserController extends MainController {
    constructor($app) {
        super($app);
        this.UserModel = new this.repository('User');
        //Binding only for async methods.
        this.UserIndex = this.UserIndex.bind(this);
    }

    Routes($path) {
        this.app.get(`${$path}`, this.UserIndex);
    }

    async UserIndex(req, res) {
        try {
            const users = await this.UserModel.count();
            res.send(`Total users: ${users}`);
        } catch (error) {
            res.send('Error!');
        }
    }
}

module.exports = UserController;