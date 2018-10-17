import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MusicSearchComponent } from "./music-search/music-search.component";
import { AlbumsGridComponent } from "./albums-grid/albums-grid.component";
import { AlbumCardComponent } from "./album-card/album-card.component";
import { environment } from "../../environments/environment";
import { MusicSearchService, SEARCH_API_URL } from "./music-search.service";
import { SearchFormComponent } from './search-form/search-form.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [MusicSearchComponent, AlbumsGridComponent, AlbumCardComponent, SearchFormComponent],
  exports: [MusicSearchComponent],
  providers: [
    {
      provide: SEARCH_API_URL,
      useValue: environment.api_url
    },
  ]
})
export class MusicModule {}
