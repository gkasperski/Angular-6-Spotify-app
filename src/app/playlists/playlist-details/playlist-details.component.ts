import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
 
  @Input() playlist: Playlist;
  edit: boolean;

  @Output() playlistChange = new EventEmitter<Playlist>();



  constructor() { 
  }

  ngOnInit() {
  }

  save(form) {
    const playlist = {
      ...this.playlist,
      ...(form.value as Partial<Playlist>)
    }
    this.playlistChange.emit(playlist);
    this.edit = !this.edit;
  }

  enableEdition() {
    this.edit = !this.edit;
  } 

  onCancelButtonClick (e) {

  }

}
