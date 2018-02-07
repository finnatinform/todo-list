import * as React from "react";

import { TodoListHeader } from "./todo-list-header" ;
import { TodoListContent } from "./todo-list-content";

export interface ITodoListProps {}
export interface ITodoListState {}
export class TodoListState {}

export class TodoList extends React.Component<ITodoListProps, ITodoListState> {
    render() {
        return(
            <div className="todo-list">
                <TodoListHeader name="Finn" />
                <TodoListContent />
            </div>
        );
    }
}