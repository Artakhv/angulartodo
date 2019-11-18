import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent implements OnInit {
  show: any;
  newSelectedItem: any;

  constructor(private itemsService: ItemsService) { }
  items: Item[];
  selectedItems: Item[];
  editItem: string;
  editItemSelected:string;
  newItem:string
  ngOnInit() {
    // this.items = this.itemsService.getItems();

    this.itemsService.getAllItems().subscribe(allitems => this.items = allitems);
    this.itemsService.getSelectedItems().subscribe(allselecteditem => this.selectedItems = allselecteditem)
  }
  Delete(item) {
    this.itemsService.removeItem(item);
  }
  Select(item){
    this.itemsService.addToSellected(item);
  }
  unSelect(item){
    this.itemsService.toReturnInitial(item);
  }
  ShowEditInput(item) {
    this.editItem = item.name
  }
  ShowEditInputSelected(item) {
    this.editItemSelected = item.name
  }
  
  OnEditKeyUp(event) {
    this.newItem = event.target.value;
  }
  OnEditKeyUpSel(event){
    this.newSelectedItem = event.target.value;

  }
  CloseEditBar(){
    this.editItem = ""
  }
  CloseEditBarSelected(){
    this.editItemSelected = ""
  }
  EditItem(item) {
    if (!this.newItem)
      return;
    let add = new Item();
    add.name = this.newItem;
    this.itemsService.editItem(item, add).subscribe(()=>this.editItem = "")
  }
  EditItemSelected(item) {
    if (!this.newSelectedItem)
      return;
    let add = new Item();
    add.name = this.newSelectedItem;
    this.itemsService.editItemSelected(item, add).subscribe(()=>this.editItemSelected = "")
  }
  DeleteSelected(item) {
    this.itemsService.removeItemSelected(item);
  }

}
