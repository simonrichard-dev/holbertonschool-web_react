// main.ts

// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="crud.d.ts" />

// Importing types from interface.ts
import { RowID, RowElement } from './interface';

// Importing everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row object with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
