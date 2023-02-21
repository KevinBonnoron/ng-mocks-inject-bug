import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeAll(() =>
    MockBuilder(AppComponent)
      // Working with this
      //.mock(ENVIRONMENT_TOKEN, { baseUrl: 'BASE_URL' })
  );

  it('should create the component', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture).toBeTruthy();
  });
});
