import * as React from "react";
import AppActionHandler = require('./../app/app-action-handler');

export interface ITodoListItemProps {
    Text: string;
    Edit: boolean;
}

export interface ITodoListItemState {
    Text: string;
}

export class TodoListItemState {
    Text: string;

    constructor(_Text: string) {
        this.Text = _Text;
    }
}

export class TodoListItem extends React.Component<ITodoListItemProps, ITodoListItemState> {

    constructor(_Props: ITodoListItemProps) {
        super(_Props);
        this.state = new TodoListItemState(_Props.Text);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onSaveItem = this.onSaveItem.bind(this);
    }

    private renderText(): JSX.Element {
        let HResult: JSX.Element;
        if (this.props.Edit) {
            HResult = <input autoFocus={true} value={this.state.Text} onChange={this.onItemChange} />
        } else {
            HResult = <div className="todo-list-item-text">{this.state.Text}</div>
        }
        return HResult;
    }

    private onItemChange(_Event: any): void {
        this.setState({
            Text: _Event.target.value
        });
    }

    componentWillReceiveProps(_NewProps: ITodoListItemProps, _NewContext: any): void {
        this.setState({
            Text: _NewProps.Text
        });
    }

    private onEditItem(): void {
        AppActionHandler.onEditItemRequested(this.props.Text);
    }
    private onDeleteItem(): void {
        AppActionHandler.onItemDeleteRequested(this.props.Text);
    }
    private onSaveItem(): void {
        AppActionHandler.onItemEdited(this.props.Text, this.state.Text);
    }
    private onCancelEdit(): void {
        AppActionHandler.onEditItemCanceled();
    }

    private renderEditItems(): Array<JSX.Element> {
        let HResult: Array<JSX.Element> = [];
        if (this.props.Edit) {
            HResult.push(<div className="todo-list-item-edit-button ion-checkmark" onClick={this.onSaveItem} />);
            HResult.push(<div className="todo-list-item-edit-button ion-close" onClick={this.onCancelEdit} />);
        } else {
            HResult.push(<div className="todo-list-item-edit-button ion-edit" onClick={this.onEditItem} />);
            HResult.push(<div className="todo-list-item-edit-button ion-trash-a" onClick={this.onDeleteItem} />);
        }
        return HResult;
    }

    render() {
        return (
            <div className="todo-list-item">
                <div className="todo-list-item-edit">
                    {this.renderEditItems()}
                </div>
                {this.renderText()}
            </div>
        );
    }

}