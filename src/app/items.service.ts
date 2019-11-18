import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './Item';
import { ITEMS, SELECTEDITEMS } from './moqk-items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor() { }

  getAllItems(): Observable<Item[]> {
    return of(ITEMS);
  }
  getSelectedItems(): Observable<Item[]> {
    return of(SELECTEDITEMS);
  }
  addItem(newitem: Item) {
    ITEMS.push(newitem);
    return of(ITEMS);
  }

  removeItem(newitem: Item) {
    for (var i = 0; i < ITEMS.length; i++) {
      if (ITEMS[i].name == newitem.name) {
        ITEMS.splice(i, 1);
      }
    }
    return of(ITEMS);
  }
  removeItemSelected(newitem: Item){
    for (var i = 0; i < SELECTEDITEMS.length; i++) {
      if (SELECTEDITEMS[i].name == newitem.name) {
        SELECTEDITEMS.splice(i, 1);
      }
    }
    return of(SELECTEDITEMS);
  }
  
  editItem(exitem, editedName:Item) {
    for (var i = 0; i < ITEMS.length; i++) {    
      if (ITEMS[i].name == exitem) {
        ITEMS[i].name=editedName.name;       
      }
    }
    return of(ITEMS);
  }
  editItemSelected(exitem, editedName:Item) {
    for (var i = 0; i < SELECTEDITEMS.length; i++) {    
      if (SELECTEDITEMS[i].name == exitem) {
        SELECTEDITEMS[i].name=editedName.name;       
      }
    }
    return of(SELECTEDITEMS);
  }

  addToSellected(newitem: Item) {   
    for (var i = 0; i < ITEMS.length; i++) {
      if (ITEMS[i].name == newitem.name) {
        SELECTEDITEMS.push(newitem)
        ITEMS.splice(i, 1);
      }
    }
    return of(SELECTEDITEMS);
  }
  toReturnInitial(newitem: Item) {   
    for (var i = 0; i < SELECTEDITEMS.length; i++) {
      if (SELECTEDITEMS[i].name == newitem.name) {
        ITEMS.push(newitem)
        SELECTEDITEMS.splice(i, 1);
      }
    }
    return of(ITEMS);
  }

}
