enum AppActionTypes {
    AT_ITEM_ADD_REQUESTED ,
    AT_ITEM_ADD_CANCELED ,
    AT_ITEM_ADDED ,
    AT_ITEM_EDIT_REQUESTED ,
    AT_ITEM_EDIT_CANCELED ,
    AT_ITEM_EDITED ,

    // Laden von Daten
    AT_DATA_LOAD_REQUESTED ,
    AT_DATA_LOAD_SUCCESS ,
    AT_DATA_LOAD_ERROR ,

    // Löschen von Daten
    AT_DATA_DELETE_REQUESTED ,
    AT_DATA_DELETE_SUCCESS ,
    AT_DATA_DELETE_ERROR

    // Hinzufügen von Daten

    // Editieren von Daten


}

export = AppActionTypes ;