const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const intentLimit = 5
let intent = 0;

class DB {
    static connect() {
        return new Promise((resolve, reject) => {
            const mongoseDB = mongoose.connection;

            mongoseDB.on('connecting', () => console.log('connecting to MongoDB...'));
            mongoseDB.on('error', (error) => {
                mongoose.disconnect();
                reject(`Error in MongoDb connection: ${error}`)
            });
            mongoseDB.on('connected', () => {
                console.log('MongoDB connected!');
                resolve(mongoose);
            });
            mongoseDB.once('open', () => { intent = 0; });
            mongoseDB.on('reconnected', () => console.log('MongoDB reconnected!'));
            mongoseDB.on('disconnected', () => {
                console.log('MongoDB disconnected!');
                if (intent <= intentLimit) {
                    intent++;
                    mongoose.connect(DB.getDb(), DB.options());
                } else console.log('Limit intent connections.');
            });

            mongoose.connect(DB.getDb(), DB.options());
        });
    }

    static getDb() {
        const credentials = global.config.db.username !== "" ? `${global.config.db.username}:${global.config.db.password}@` : '';
        return `mongodb://${credentials}${global.config.db.hostname}:${global.config.db.port}/${global.config.db.dbname}`;
    }

    static options() {
        return {
            useNewUrlParser: true
        };
    }
}

module.exports = DB;