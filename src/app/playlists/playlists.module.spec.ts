import { PlaylistsModule } from './playlists.module';

describe('PlaylistsModule', () => {
  let playlistsModule: PlaylistsModule;

  beforeEach(() => {
    playlistsModule = new PlaylistsModule();
  });

  it('should create an instance', () => {
    expect(playlistsModule).toBeTruthy();
  });
});
