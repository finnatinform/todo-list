import Express = require('express');
import fs = require('fs-extra');

class DataControllerClass {

    private __Items: Array<string>;

    constructor() {
        this.onPostData = this.onPostData.bind(this);
        this.onGetData = this.onGetData.bind(this);
        this.onDeleteData = this.onDeleteData.bind(this);
        this.onLoadFinished = this.onLoadFinished.bind(this);

        this.loadData().then(this.onLoadFinished);
    }

    public onPostData(_Request: Express.Request, _Response: Express.Response): void {
        let HNewItem: string = _Request.body.item;
        let HFound : boolean ;
        // Update Data
        for (let HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == HNewItem) {
                this.__Items[HIndex] = HNewItem ;
                HFound = true ;
            }
        }
        if(!HFound){
            this.__Items.push(HNewItem);
        }
        this.saveData(this.__Items).then((_Result: boolean) => { _Response.end(JSON.stringify({ 'success': _Result })); });
    }

    public onGetData(_Request: Express.Request, _Response: Express.Response): void {
        _Response.end(JSON.stringify(this.__Items));
    }
    public onDeleteData(_Request: Express.Request, _Response: Express.Response): void {
        let HItem: string = _Request.body.item;
        let HFound : boolean ;
        // Delete Data
        for (let HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == HItem) {
                this.__Items.splice( HIndex , 1 ) ;
                HFound = true ;
            }
        }
        if( HFound ){
            this.saveData(this.__Items).then((_Result: boolean) => { _Response.end(JSON.stringify({ 'success': _Result })); });
        } else {
            _Response.end(JSON.stringify({ 'success': HFound }));
        }
    }

    private onLoadFinished(_Items: Array<string>) {
        this.__Items = _Items;
    }

    private async saveData(_Data: Array<string>): Promise<boolean> {
        try {
            await fs.ensureFile('./data.json');
            await fs.writeJson('./data.json', _Data);
            return true;
        } catch (_Error) {
            return false;
        }
    }
    private async loadData(): Promise<Array<string>> {
        try {
            return await fs.readJson('./data.json');
        } catch (_Error) {
            return [];
        }
    }
}

var DataController: DataControllerClass = new DataControllerClass();
export = DataController;