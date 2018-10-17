import { Injectable, Inject, InjectionToken } from "@angular/core";
import { AlbumsResponse } from "../model/Album";
import { HttpClient} from "@angular/common/http";
import { SecurityService } from "../security/security.service";
import { map } from "rxjs/operators";

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

  getAlbums(query = "witcher 3") {
    return this.http
      .get<AlbumsResponse>(this.api_url, {
        params: {
          q: query,
          type: "album"
        }
      })
      .pipe(
        map(resp => resp.albums.items),
      );
  }
}
