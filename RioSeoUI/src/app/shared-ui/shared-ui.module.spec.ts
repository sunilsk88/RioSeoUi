import { SharedUiModule } from './shared-ui.module';

describe('SharedUiModule', () => {
  let sharedUiModule: SharedUiModule;

  beforeEach(() => {
    sharedUiModule = new SharedUiModule();
  });

  it('should create an instance', () => {
    expect(sharedUiModule).toBeTruthy();
  });
});
