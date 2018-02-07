import { Store } from 'flux/utils';
import AppAction = require('./../app/app-action');
import AppDispatcher = require('./../app/app-dispatcher');
import { Dispatcher } from 'flux';
import AppActionTypes = require('./../app/app-action-types');

class TodoStoreStatic extends Store<AppAction>{
    private __Items: Array<string>;
    private __EditItem : number ;

    constructor(_Dispatcher: Dispatcher<AppAction>) {
        super(_Dispatcher);
        this.__Items = [];
        this.__EditItem = -1 ;
    }
    public get Items(): Array<string> {
        return this.__Items;
    }
    public get EditItem():number{
        return this.__EditItem ;
    }
    private addItem(_Item: string) {
        this.__Items.push(_Item);
    }

    private deleteItem(_Item: string) {
        for (var HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == _Item) {
                break;
            }
        }
        this.__Items.splice(HIndex, 1);
    }

    private editItem(_OldItem: string, _NewItem: string) {
        for (var HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == _OldItem) {
                break;
            }
        }
        this.__Items[HIndex] = _NewItem ;
    }

    private startEditItem(_Item: string) : void {
        for (var HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == _Item) {
                break;
            }
        }
        this.__EditItem = HIndex ;
    }

    private endEditItem() : void{
        this.__EditItem = -1 ;
    }

    __onDispatch(_Action: AppAction) {
        var HError: boolean = false;
        switch (_Action.actionType) {
            case AppActionTypes.AT_ITEM_ADDED:
                this.addItem(_Action.data.item);
                break;
            case AppActionTypes.AT_ITEM_DELETED:
                this.deleteItem(_Action.data.item);
                break;
            case AppActionTypes.AT_ITEM_EDIT_REQUESTED:
                this.startEditItem(_Action.data.item);
                break;
            case AppActionTypes.AT_ITEM_EDIT_CANCELED:
                this.endEditItem();
                break ;
            case AppActionTypes.AT_ITEM_EDITED:
                this.editItem( _Action.data.itemOld , _Action.data.itemNew );
                this.endEditItem();
                break;
            default:
                HError = true;
        }
        if (!HError) {
            this.__emitChange();
        }
    }
}

var TodoStore: TodoStoreStatic = new TodoStoreStatic(AppDispatcher);
export = TodoStore;