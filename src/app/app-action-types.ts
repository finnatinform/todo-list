enum AppActionTypes {
    // Laden von Daten
    AT_DATA_LOAD_REQUESTED ,
    AT_DATA_LOAD_SUCCESS ,
    AT_DATA_LOAD_ERROR ,

    // Löschen von Daten
    AT_DATA_DELETE_REQUESTED ,
    AT_DATA_DELETE_SUCCESS ,
    AT_DATA_DELETE_ERROR ,

    // Hinzufügen von Daten
    AT_ITEM_ADD_START ,
    AT_ITEM_ADD_CANCELED ,
    AT_ITEM_ADD_REQUESTED ,
    AT_ITEM_ADD_SUCCESS ,
    AT_ITEM_ADD_ERROR ,

    // Editieren von Daten
    AT_ITEM_EDIT_START ,
    AT_ITEM_EDIT_CANCELED ,
    AT_ITEM_EDIT_REQUESTED ,
    AT_ITEM_EDIT_ERROR ,
    AT_ITEM_EDIT_SUCCESS
}

export = AppActionTypes ;