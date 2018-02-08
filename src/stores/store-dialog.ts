import { Store } from 'flux/utils';
import AppAction = require('./../app/app-action');
import AppDispatcher = require('./../app/app-dispatcher');
import { Dispatcher } from 'flux';
import AppActionTypes = require('./../app/app-action-types');

class DialogStoreStatic extends Store<AppAction>{
    private __InDialog : boolean ;

    public get InDialog():boolean{
        return this.__InDialog ;
    }
    private showDialog(){
        this.__InDialog = true ;

    }

    private hideDialog(){
        this.__InDialog = false ;
    }

    __onDispatch(_Action: AppAction) {
        var HError: boolean = false;
        switch (_Action.actionType) {
            case AppActionTypes.AT_ITEM_ADD_START:
                this.showDialog();
                break;

            case AppActionTypes.AT_ITEM_ADD_CANCELED:
                this.hideDialog();
                break;

            case AppActionTypes.AT_ITEM_ADD_REQUESTED:
                this.hideDialog();
                break;
            
            default:
                HError = true;
        }

        if (!HError) {
            this.__emitChange();
        }
    }
}

var DialogStore: DialogStoreStatic = new DialogStoreStatic(AppDispatcher);
export = DialogStore;