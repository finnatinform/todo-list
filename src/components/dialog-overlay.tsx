import * as React from "react";
import DialogStore = require('./../stores/store-dialog');
import { EventSubscription } from "fbemitter";
import AppActionHandler = require('./../app/app-action-handler');
import { MouseEvent } from "react";

export interface IDialogOverlayProps { }
export interface IDialogOverlayState {
    InDialog: boolean;
}
export class DialogOverlayState implements IDialogOverlayState {
    InDialog: boolean;
    constructor(){
        this.InDialog = DialogStore . InDialog ;
    }
}

export class DialogOverlay extends React.Component<IDialogOverlayProps, IDialogOverlayState> {

    private __DialogStoreListener: EventSubscription;

    constructor( _Props : IDialogOverlayProps ){
        super(_Props);
        this.state = new DialogOverlayState();
        this.onDialogStoreChange = this.onDialogStoreChange.bind(this);
    }


    componentDidMount(){
        this.__DialogStoreListener = DialogStore.addListener(this.onDialogStoreChange);
    }
    componentWillUnmount(){
        this.__DialogStoreListener.remove();
    }

    private onDialogStoreChange():void{
        this.setState({
            InDialog : DialogStore.InDialog
        });
    }

    private onDialogClose():void{
        AppActionHandler.onAddItemAborted();
    }

    private onItemSave():void{
        AppActionHandler.onItemAdded((document.getElementById('id-dialog-input') as any).value);
    }

    private renderOverlay(): JSX.Element {
        if (this.state.InDialog) {
            return (
                <div className="dialog-overlay">
                    <input id="id-dialog-input" placeholder="Neuer Eintrag" autoFocus={true} />
                    <div className="dialog-overlay-actions">
                        <div className="dialog-overlay-actions-button ion-checkmark" onClick={this.onItemSave} />
                        <div className="dialog-overlay-actions-button ion-close" onClick={this.onDialogClose} />
                    </div>
                </div>
            );
        } else {
            return <div /> ;
        }
    }
    render() {
        return this.renderOverlay();
    }
}