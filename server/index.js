const nr = require('newrelic')
const path = require('path');
const express = require('express');
const app = express();
const port = 3005;
const router = require('./router.js');

//middleware
const morgan = require('morgan');
const parser = require('body-parser');
// const proxy = require('http-proxy-middleware');

//use middleware
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use("/api", router);
app.use("/loaderio-bdd871c28a973f7949ac51502c2a1afd", ((req,res) => res.send("loaderio-bdd871c28a973f7949ac51502c2a1afd")));


app.listen(port, () => {console.log(`listening on port ${port} for JI COMPONENT`)});