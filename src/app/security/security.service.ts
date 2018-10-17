import { Injectable, InjectionToken, Inject } from "@angular/core";
import { HttpParams } from "@angular/common/http";

interface AuthConfig {
  production: string;
  auth_url: string;
  client_id: string;
  response_type: string;
  redirect_uri: string;
}
export const AuthConfig = new InjectionToken("Auth config");

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  token: string = "";
  constructor(@Inject(AuthConfig) private config: AuthConfig) {}

  authorize() {
    const { auth_url, client_id, response_type, redirect_uri } = this.config;
    const p = new HttpParams({
      fromObject: {
        client_id,
        response_type,
        redirect_uri
      }
    });
    const url = `${auth_url}?${p.toString()}`;
    console.log(url);
    sessionStorage.removeItem("token");
    location.replace(url);
  }

  getToken() {
    this.token = JSON.parse(sessionStorage.getItem("token"));

    if (!this.token && location.hash) {
      const params = new HttpParams({
        fromString: location.hash
      });
      this.token = params.get("#access_token");
      sessionStorage.setItem("token", JSON.stringify(this.token));
    }

    if (!this.token) {
      this.authorize();
    }
    return this.token;
  }
}
