const MainModel = require('../../core/BaseModel');
class UserModel extends MainModel { 
    constructor($mongoose) {
        return super($mongoose, 'User');
    }

    load() { 
        const User = new this.Schema({
            username: { type: String },
            password: { type: String }
        });

        return User
    }
}

module.exports = UserModel;