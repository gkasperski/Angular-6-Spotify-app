import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistsViewComponent } from './playlists-view/playlists-view.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [PlaylistsViewComponent, ItemsListComponent, ListItemComponent, PlaylistDetailsComponent],
  exports: [ PlaylistsViewComponent ]
})
export class PlaylistsModule { }
