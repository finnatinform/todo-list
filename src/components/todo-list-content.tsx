import * as React from "react";
import { TodoListItem } from "./todo-list-item";
import { EventSubscription } from "fbemitter";
import TodoStore = require('./../stores/store-todo');
import AppActionHandler = require('./../app/app-action-handler');

export enum LoadingState{
    LS_SUCCESS ,
    LS_LOADING ,
    LS_ERROR ,
    LS_DELETING ,
    LS_SAVING
}

export interface ITodoListContentProps {}
export interface ITodoListContentState {
    Items : Array<string> ;
    EditItem : number ;
    LoadingStatus : LoadingState ;
}

export class TodoListContentState {
    Items : Array<string> ;
    EditItem : number ;
    LoadingStatus : LoadingState ;

    constructor(){
        this.Items = TodoStore.Items ;
        this.EditItem = TodoStore.EditItem;
        this.LoadingStatus = TodoStore.LoadingStatus ;
    }
}

export class TodoListContent extends React.Component<ITodoListContentProps, ITodoListContentState> {

    private __TodoStoreListener: EventSubscription;

    constructor( _Props : ITodoListContentProps ){
        super(_Props);
        this.state = new TodoListContentState();
        this.onTodoStoreChange = this.onTodoStoreChange.bind(this);
    }

    componentDidMount():void{
        this.__TodoStoreListener = TodoStore.addListener(this.onTodoStoreChange); 
        AppActionHandler.onDataLoadRequested();
    }

    componentWillUnmount():void{
        this.__TodoStoreListener.remove();
    }

    private onTodoStoreChange():void{
        this.setState({
            Items : TodoStore.Items ,
            EditItem : TodoStore.EditItem
        });
    }

    private renderItems():Array<JSX.Element>{
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0 ; HIndex < this.state.Items.length; HIndex++ ){
            HResult.push( <TodoListItem Text={this.state.Items[HIndex]} Edit={HIndex==this.state.EditItem} /> );
        }

        return HResult ;
    }

    private get StatusText():string{
        let HResult : string = "";
        switch( this.state.LoadingStatus ){
            case LoadingState.LS_ERROR:
                HResult = "Es ist ein Fehler aufgetreten.";
            break ;
            case LoadingState.LS_LOADING:
                HResult = "Daten werden geladen...";
            case LoadingState.LS_DELETING:
                HResult = "Eintrag wird gelöscht." ;
            case LoadingState.LS_SAVING:
                HResult = "Eintrag wird gespeichert.";
            break;
        }

        return HResult ;
    }
    private renderStatus():JSX.Element{
        return(
            <div className="todo-list-status" >
                {this.StatusText}
            </div>
        );
    }

    private renderContent():Array<JSX.Element>{
        if(this.state.LoadingStatus>0){
            return [ this.renderStatus() ] ;
        } else {
            return this.renderItems();
        }
    }
    render() {
        return(
            <div className="todo-list-content">
                {this.renderContent()}
            </div>
        );
    }
}