import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsViewComponent } from './playlists-view.component';

describe('PlaylistsViewComponent', () => {
  let component: PlaylistsViewComponent;
  let fixture: ComponentFixture<PlaylistsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
