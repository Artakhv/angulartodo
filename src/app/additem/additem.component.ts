import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {
  constructor(private itemsService: ItemsService) { }
  public addedItem;
  public addItem() {
    if (!this.addedItem)
      return;
    let add = new Item();
    add.name = this.addedItem;
    this.itemsService.addItem(add).subscribe(() => this.addedItem = "");
  }
}
