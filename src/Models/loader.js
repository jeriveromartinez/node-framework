class Loader { 
    constructor($mongoose) { 
        this.mongoose = $mongoose;
    }

    load() { 
        return {
            mongoose: this.mongoose,
            User: new (require('./User'))(this.mongoose),
        };
    }
}

module.exports = Loader;