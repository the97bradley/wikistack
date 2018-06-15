const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const {db} = require('./models');


const views = require('./views/index');

const models = require('./models/index');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));


const init = async () => {
    await models.User.sync();
    await models.Page.sync();
    await models.db.sync();


    app.listen(1337, (req, res) => {
        console.log('App connected at Port 1337');
    });

}
init();


app.get('/', (req, res) => {
    res.send(views.main(''));
});


