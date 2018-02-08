import { Store } from 'flux/utils';
import AppAction = require('./../app/app-action');
import AppDispatcher = require('./../app/app-dispatcher');
import { Dispatcher } from 'flux';
import AppActionTypes = require('./../app/app-action-types');
import { LoadingState } from '../components/todo-list-content';
import AppActionHandler = require('./../app/app-action-handler');
import * as $ from "jquery";

class TodoStoreStatic extends Store<AppAction>{
    private __Items: Array<string>;
    private __EditItem: number;
    private __LoadingStatus: LoadingState;

    constructor(_Dispatcher: Dispatcher<AppAction>) {
        super(_Dispatcher);
        this.__Items = [];
        this.__EditItem = -1;
    }
    public get Items(): Array<string> {
        return this.__Items;
    }
    public get EditItem(): number {
        return this.__EditItem;
    }
    public get LoadingStatus(): LoadingState {
        return this.__LoadingStatus;
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
        this.__Items[HIndex] = _NewItem;
    }

    private startEditItem(_Item: string): void {
        for (var HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == _Item) {
                break;
            }
        }
        this.__EditItem = HIndex;
    }

    private endEditItem(): void {
        this.__EditItem = -1;
    }

    private loadData(): void {
        this.__LoadingStatus = LoadingState.LS_LOADING;
        $.getJSON('http://localhost:8080/todo')
            .done(AppActionHandler.onDataLoadSuccess)
            .fail(AppActionHandler.onDataLoadFailed);
    }

    private deleteData(_Item: string): void {
        this.__LoadingStatus = LoadingState.LS_DELETING;
        $.ajax({
            url : 'http://localhost:8080/todo' ,
            type : 'DELETE',
            contentType : 'application/json' ,
            data : JSON.stringify({ item : _Item })
        })
            .done(this.onDeleteDataFinished)
            .fail(AppActionHandler.onItemDeleteError);
    }

    private onDeleteDataFinished(_Response: string): void {
        if (JSON.parse(_Response).success) {
            AppActionHandler.onItemDeleteSuccess();
        } else {
            AppActionHandler.onItemDeleteError();
        }
    }

    __onDispatch(_Action: AppAction) {
        var HError: boolean = false;
        switch (_Action.actionType) {
            case AppActionTypes.AT_ITEM_ADDED:
                this.addItem(_Action.data.item);
                break;
            case AppActionTypes.AT_ITEM_EDIT_REQUESTED:
                this.startEditItem(_Action.data.item);
                break;
            case AppActionTypes.AT_ITEM_EDIT_CANCELED:
                this.endEditItem();
                break;
            case AppActionTypes.AT_ITEM_EDITED:
                this.editItem(_Action.data.itemOld, _Action.data.itemNew);
                this.endEditItem();
                break;
            case AppActionTypes.AT_DATA_LOAD_REQUESTED:
                this.loadData();
                break;
            case AppActionTypes.AT_DATA_LOAD_SUCCESS:
                this.__LoadingStatus = LoadingState.LS_SUCCESS;
                this.__Items = _Action.data.items;
                break;
            case AppActionTypes.AT_DATA_LOAD_ERROR:
                this.__LoadingStatus = LoadingState.LS_ERROR
                this.__Items = [];
                break;
            case AppActionTypes.AT_DATA_DELETE_SUCCESS:
                this.loadData();
                break;
            case AppActionTypes.AT_DATA_DELETE_REQUESTED:
                this.deleteData(_Action.data.item);
                break;
            case AppActionTypes.AT_DATA_DELETE_ERROR:
                this.__LoadingStatus = LoadingState.LS_ERROR
                this.__Items = [];
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