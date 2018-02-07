import Express = require('express');
import BodyParser = require('body-parser');
import DataController = require('./controller/controller-data');

let Application = Express();
Application.use(BodyParser.json());

Application.route('/data')
    .get(DataController.onGetData)
    .post(DataController.onPostData) ;

let Server = Application.listen(8080, function(){
    console.log(`Server listening at http://${Server.address().address}:${Server.address().port}`);
});