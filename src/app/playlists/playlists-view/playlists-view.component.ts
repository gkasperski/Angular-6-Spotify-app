import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  playlist: Playlist[] = [
    {
      id: 123,
      name: 'Angular hits',
      favourite: false,
      color: "#ff0000"
    },
    {
      id: 234,
      name: 'Angular TOP20',
      favourite: false,
      color: "#00ff00"
    },
    {
      id: 567,
      name: 'The best of angular',
      favourite: false,
      color: "#0000ff"
    },
  ];

  selected = this.playlist[0];

  select(playlist: Playlist) {
    this.selected = this.selected === playlist ? null : playlist;
  }

  save(item: Playlist) {
    const index = this.playlist.findIndex(p => p.id === item.id);
    if (index !== -1) {
      this.playlist.splice(index, 1, item); 
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
