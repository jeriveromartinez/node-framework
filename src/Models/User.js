class UserModel { 
    constructor($mongoose) {
        this.mongoose = $mongoose;
        this.Schema = this.mongoose.Schema;

        return this.mongoose.model('User', this.load());
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