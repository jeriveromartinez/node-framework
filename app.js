const db = require('./core/DB');
global.config = require('./config.json');

db.connect()
    .then(mongoose => {
        const ModelLoader = new(require('./src/Models/loader'))(mongoose);
        global.db = ModelLoader.load();
        const server = new (require('./core/server'))();
        require('./src/Routes/loader').load(server.app);
        server.run();
    })
    .catch(error => { 
        console.log(error.message);
    });