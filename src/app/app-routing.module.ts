import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsViewComponent } from './playlists/playlists-view/playlists-view.component';
import { MusicSearchComponent } from './music/music-search/music-search.component';

const routes: Routes = [
  {
    path: "",
    component: PlaylistsViewComponent,
  },
  {
    path: "search",
    component: MusicSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
