import Express = require('express');
import BodyParser = require('body-parser');
import DataController = require('./controller/controller-data');
import Cors = require('cors');

let Application = Express();
Application.use(BodyParser.json());
Application.use(Cors());

Application.route('/todo')
    .get(DataController.onGetData) // list
    .put(DataController.onPutData) // add
    .post(DataController.onPostData) // edit
    .delete(DataController.onDeleteData) ; // delete

let Server = Application.listen(8080, function(){
    console.log(`Server listening at http://${Server.address().address}:${Server.address().port}`);
});