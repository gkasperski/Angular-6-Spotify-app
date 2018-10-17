import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album, AlbumsResponse } from '../model/Album';
import { HttpClient } from "@angular/common/http";
import { SecurityService } from '../security/security.service';
import { map } from 'rxjs/operators';

export const SEARCH_API_URL = new InjectionToken<string>(
  "Search API URL TOKEN"
);

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  albums: Album[] = [
    {
      id: "123",
      name: "Ala ma kota",
      images: [
        {
          url: "http://placekitten.com/300/300"
        }
      ]
    }
  ];

  constructor(
    @Inject(SEARCH_API_URL) private api_url: string,
    private http: HttpClient,
    private security: SecurityService
  ) {}

  //getAlbums = () => this.albums;

  getAlbums() {
    return this.http.get<AlbumsResponse>(this.api_url, {
      headers: {
        Authorization: `Bearer ${this.security.getToken()}`
      },
      params: {
        q: "witcher 3",
        type: "album"
      }
    }).pipe(
      map(resp => resp.albums.items),
    )
  }

}
