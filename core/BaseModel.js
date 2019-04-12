class BaseModel {
    /**
     * @param {Mongoose} $mongoose 
     * @param {string} name 
     */
    constructor($mongoose, name) {
        this.mongoose = $mongoose;
        this.Schema = this.mongoose.Schema;

        return this.mongoose.model(name, this.load());
    }

    load() {}
}

module.exports = BaseModel;