import * as React from "react";
import { TodoListItem } from "./todo-list-item";
import { EventSubscription } from "fbemitter";
import TodoStore = require('./../stores/store-todo');

export interface ITodoListContentProps {}
export interface ITodoListContentState {
    Items : Array<string> ;
    EditItem : number ;
}

export class TodoListContentState {
    Items : Array<string> ;
    EditItem : number ;

    constructor(){
        this.Items = TodoStore.Items ;
        this.EditItem = TodoStore.EditItem;
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
        console.log('renderItems with edit: '+this.state.EditItem);
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0 ; HIndex < this.state.Items.length; HIndex++ ){
            HResult.push( <TodoListItem Text={this.state.Items[HIndex]} Edit={HIndex==this.state.EditItem} /> );
        }

        return HResult ;
    }

    render() {
        return(
            <div className="todo-list-content">
                {this.renderItems()}
            </div>
        );
    }
}