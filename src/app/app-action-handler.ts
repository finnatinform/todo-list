import AppDispatcher = require('./app-dispatcher');
import AppActionTypes = require('./app-action-types');

class ActionHandler {

    public onAddItemRequested():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_REQUESTED,
            data : {}
        });
    }

    public onAddItemAborted():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_REQUESTED,
            data : {}
        });
    }

    public onItemAdded( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADDED,
            data : {
                item : _Item.trim()
            }
        });
    }
    public onItemDeleted( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_DELETED,
            data : {
                item : _Item
            }
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

}

var AppActionHandler: ActionHandler = new ActionHandler();

export = AppActionHandler;