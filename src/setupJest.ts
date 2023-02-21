import 'jest-preset-angular/setup-jest';
import { ngMocks } from 'ng-mocks';
import { ENVIRONMENT_TOKEN } from './app/app.component';

ngMocks.defaultMock(ENVIRONMENT_TOKEN, () => ({
  baseUrl: 'BASE_URL'
}));
