interface Entity {
  id: string;
  name: string;
}

export interface Album extends Entity {
  artists?: Artist[];
  images: AlbumImage[];
}

interface Artist extends Entity {
  popularity: number;
}

interface AlbumImage {
  url: string;
}

export interface PageObject<T> {
  items: T[];
}

export interface AlbumsResponse {
  albums: PageObject<Album>;
}

export interface ArtistsResponse {
  artists: PageObject<Artist>;
}
