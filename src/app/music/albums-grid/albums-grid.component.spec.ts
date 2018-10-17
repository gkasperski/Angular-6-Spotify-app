import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsGridComponent } from './albums-grid.component';

describe('AlbumsGridComponent', () => {
  let component: AlbumsGridComponent;
  let fixture: ComponentFixture<AlbumsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
