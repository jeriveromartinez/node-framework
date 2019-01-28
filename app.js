global.config = require('./config.json');

require('./core/DB').connect()
    .then(mongoose => {
        const ModelLoader = new(require('./src/Models/loader'))(mongoose);
        global.db = ModelLoader.load();
        const server = new(require('./core/Server'))();
        require('./src/Routes/loader').load(server.app);
        server.run();
    })
    .catch(error => console.log(error.message));