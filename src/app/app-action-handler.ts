import AppDispatcher = require('./app-dispatcher');
import AppActionTypes = require('./app-action-types');

class ActionHandler {

    public onAddItemRequested( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_REQUESTED,
            data : {
                item : _Item
            }
        });
    }

    public onAddItemAborted():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_CANCELED,
            data : {}
        });
    }

    public onItemAddSuccess():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_SUCCESS,
            data : {}
        });
    }

    public onItemAddStart():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_START,
            data : {}
        });
    }

    public onItemAddError():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_ERROR,
            data : {}
        });
    }


    public onItemDeleteRequested( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_DATA_DELETE_REQUESTED,
            data : {
                item : _Item
            }
        });
    }
    public onItemDeleteSuccess():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_DATA_DELETE_SUCCESS,
            data : {}
        });
    }
    public onItemDeleteError():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_DATA_DELETE_ERROR,
            data : {}
        });
    }    

    public onEditItemRequested( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDIT_REQUESTED,
            data : {
            }
        });        
    }

    public onEditItemCanceled():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDIT_CANCELED,
            data : {}
        });        
    }

    public onItemEditStart( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDIT_START,
            data : {
                item : _Item
            }
        });        
    }

    public onItemEditSuccess():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDIT_SUCCESS,
            data : {}
        });    
    }

    public onItemEditError():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDIT_ERROR,
            data : {}
        });    
    }

    public onDataLoadSuccess( _Data : Array<string> ):void {
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_DATA_LOAD_SUCCESS ,
            data : {
                items : _Data
            }
        });
    }

    public onDataLoadFailed():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_DATA_LOAD_ERROR ,
            data : {}
        });   
    }

    public onDataLoadRequested():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_DATA_LOAD_REQUESTED ,
            data : {}
        });   
    }    

}

var AppActionHandler: ActionHandler = new ActionHandler();

export = AppActionHandler;