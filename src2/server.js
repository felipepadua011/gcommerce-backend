// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;
// const morganBody = require('morgan-body');
// const fs = require('fs');
// const path = require('path');

// app.use(bodyParser.json());

// const log = fs.createWriteStream(
//     path.join(__dirname, "./logs", "express.log"), { flags: "a" }
// );

// morganBody(app, {
//     noColors: true,
//     stream: log
// });

// app.post('/testepost', (req, res) => {
//     res.send('Ola mundo2');
// });

// app.get('/', (req,res) => {
//     res.send('Ola mundo');
// })

// app.listen(port, () => {
//     console.log(`Rodando na porta ${port}`);
// })