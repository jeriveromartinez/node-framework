const router = require('./src/Routes/loader');
const models = require('./src/Models/loader');
const Server = require('./core/Server');

global.config = require('./config.json');

const run = async function () {
    try {
        const mongoose = await require('./core/DB').connect();
        const server = new Server();

        global.db = new models(mongoose).load();
        router.load(server.app);
        server.run();
    } catch (error) {
        console.log(error.message)
    }
}

run();