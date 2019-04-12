class Loader {
    static load($app) {
        new (require('../Controllers/UserController'))($app).Routes('/');
    }
}

module.exports = Loader;