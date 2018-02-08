import Express = require('express');
import BodyParser = require('body-parser');
import DataController = require('./controller/controller-data');

let Application = Express();
Application.use(BodyParser.json());

Application.route('/todo')
    .get(DataController.onGetData) // list
    .post(DataController.onPostData) // add or edit
    .delete(DataController.onDeleteData) ; // delete

let Server = Application.listen(8080, function(){
    console.log(`Server listening at http://${Server.address().address}:${Server.address().port}`);
});