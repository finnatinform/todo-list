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
                item : _Item
            }
        });        
    }

    public onEditItemCanceled():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDIT_CANCELED,
            data : {}
        });        
    }

    public onItemEdited( _ItemOld : string , _ItemNew : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_EDITED,
            data : {
                itemOld : _ItemOld ,
                itemNew : _ItemNew
            }
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