const express = require('express');
const { cwd } = process;

class Server {
    constructor() {
        this.app = express();
        this.port = Number(process.env.NODE_PORT || 3000);
        this.load();
    }

    load() {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(express.static(`${cwd()}/web`));
    }

    run() {
        this.app.listen(this.port, () => console.log(`listen on port ${this.port}`));
    }
}

module.exports = Server;