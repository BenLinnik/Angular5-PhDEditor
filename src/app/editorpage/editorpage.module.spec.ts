import { EditorpageModule } from '@app/editorpage/editorpage.module';

describe('EditorpageModule', () => {
  let editorpageModule: EditorpageModule;

  beforeEach(() => {
    editorpageModule = new EditorpageModule();
  });

  it('should create an instance', () => {
    expect(editorpageModule).toBeTruthy();
  });
});
