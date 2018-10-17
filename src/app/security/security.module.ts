import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfig } from './security.service';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: AuthConfig,
      useValue: environment.auth_config,
    }
  ]
})
export class SecurityModule { }
