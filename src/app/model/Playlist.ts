export interface Playlist {
  id: number;
  name: string;
  favourite: boolean;
  color: string;
  tracks?: Tracks;
}

interface Track {}
type Tracks = Track[];
