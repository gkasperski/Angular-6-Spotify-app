import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from '../../model/Playlist';

interface Item {
  id: number,
  name: string,
  color: string
}

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent<T extends Item> implements OnInit {

  @Input() items: T[] = [];

  @Output()
  selectedChange = new EventEmitter<T>();

  @Input()
  selected: any = null;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(item: T): number {
    return item.id
  }

  select(item: T) {
    this.selectedChange.emit(item);
  }

}
