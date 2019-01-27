const express = require('express');
const app = express();
const port = Number(process.env.NODE_PORT || 3000);

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + '/web'));

app.listen(port, () => {
    console.log(`listen on port ${port}`);
});