let express = require('express');
let app = express();
app.use(express.static('public'));
app.listen(8080); //http://localhost:8080/

//npm init --yes
//npm i express
//node app.js