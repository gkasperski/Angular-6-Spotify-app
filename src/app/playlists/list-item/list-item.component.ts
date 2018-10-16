import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../model/Playlist';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: Playlist;

  constructor() { }

  ngOnInit() {
  }

}
