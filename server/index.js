// const nr = require('newrelic');
const path = require('path');
const express = require('express');
const app = express();
const port = 3005;
const router = require('./router.js');

//middleware
// const morgan = require('morgan');
const parser = require('body-parser');
// const proxy = require('http-proxy-middleware');

//use middleware
// app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use("/api", router);
app.use("/loaderio-47422d786c6d1b9926c239181cec70e2", ((req,res) => res.send("loaderio-47422d786c6d1b9926c239181cec70e2")));



app.listen(port, () => {console.log(`listening on port ${port} for JI COMPONENT`)});
