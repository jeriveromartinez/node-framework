class Loader {
    static load($app) {
        new (require('../Controllers/MainController'))($app).Routes('/');
        new (require('../Controllers/UserController'))($app).Routes('/user');
    }
}

module.exports = Loader;