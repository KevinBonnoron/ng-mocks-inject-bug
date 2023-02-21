import { Component, inject, InjectionToken } from '@angular/core';

export interface Environment {
  baseUrl: string;
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('environment');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Not working with this
  private readonly environment = inject(ENVIRONMENT_TOKEN);

  // Working with this
  // constructor(
  //   @Inject(ENVIRONMENT_TOKEN) private readonly environment: Environment
  // ) { }

  get baseUrl() {
    return this.environment.baseUrl;
  }
}
