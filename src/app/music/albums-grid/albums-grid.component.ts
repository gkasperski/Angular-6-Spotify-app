import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-albums-grid',
  templateUrl: './albums-grid.component.html',
  styleUrls: ['./albums-grid.component.scss']
})
export class AlbumsGridComponent implements OnInit {

  @Input() albums;

  constructor() { }

  ngOnInit() {
  }

}
