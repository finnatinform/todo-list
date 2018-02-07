import flux = require('flux');

import AppAction = require('./app-action');

var AppDispatcher: flux.Dispatcher<AppAction> = new flux.Dispatcher();

export = AppDispatcher;