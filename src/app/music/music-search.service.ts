import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album, AlbumsResponse } from '../model/Album';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SecurityService } from '../security/security.service';
import { map, catchError } from 'rxjs/operators';
import { empty } from "rxjs";

export const SEARCH_API_URL = new InjectionToken<string>(
  "Search API URL TOKEN"
);

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
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
      catchError((error, caught) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.security.authorize();
        }
        // return empty();
      })
    )
  }

}
