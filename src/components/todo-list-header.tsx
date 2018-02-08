import * as React from "react";
import AppActionHandler = require('./../app/app-action-handler');

export interface ITodoListHeaderProps {
    name : string ;
}
export interface ITodoListHeaderState {}
export class TodoListHeaderState {}

export class TodoListHeader extends React.Component<ITodoListHeaderProps, ITodoListHeaderState> {

    constructor( _Props : ITodoListHeaderProps ){
        super(_Props);
        this.onAddItem = this.onAddItem.bind(this);
    }

    private onAddItem():void{
        AppActionHandler.onItemAddStart();
    }

    render() {
        return(
            <div className="todo-list-header">
                {this.props.name}'s Todo Liste
                <div className="todo-list-header-button ion-plus" onClick={this.onAddItem}></div>
            </div>
        );
    }
}