import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfig, SecurityService } from './security.service';
import { environment } from '../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: AuthConfig,
      useValue: environment.auth_config,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class SecurityModule { 
  constructor(private security: SecurityService) {
    this.security.getToken();
  }
}
