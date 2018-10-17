import { Injectable, Inject, InjectionToken, EventEmitter } from "@angular/core";
import { AlbumsResponse, Album } from '../model/Album';
import { HttpClient} from "@angular/common/http";
import { SecurityService } from "../security/security.service";
import { map } from "rxjs/operators";
import { Observable, of, BehaviorSubject } from "rxjs";

export const SEARCH_API_URL = new InjectionToken<string>(
  "Search API URL TOKEN"
);

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {

  // albums$ = new EventEmitter<Album[]>();
  albums$ = new BehaviorSubject<Album[]>([]);
  constructor(
    @Inject(SEARCH_API_URL) private api_url: string,
    private http: HttpClient,
    private security: SecurityService
  ) {}

  //getAlbums = () => this.albums;

  getAlbums(): Observable<Album[]> {
    return this.albums$.asObservable();
  }

  search(query: string) {
    this.http
    .get<AlbumsResponse>(this.api_url, {
      params: {
        q: query,
        type: "album"
      }
    })
    .pipe(
      map(resp => resp.albums.items),
    )
    .subscribe(albums => {
      this.albums$.next(albums);
    });
  }
}
