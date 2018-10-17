import { Component, OnInit } from "@angular/core";
import { MusicSearchService } from "../music-search.service";
import { Album } from '../../model/Album';

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.scss"]
})
export class MusicSearchComponent implements OnInit {

  albums: Album[] = [];

  constructor(private service: MusicSearchService) {}

  ngOnInit() {

    this.service.getAlbums().subscribe(response => {
      this.albums = response;
    })
  }
}
