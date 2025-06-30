import { LanguageSupport } from '@codemirror/language';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { BasicSetupOptions } from '@uiw/react-codemirror';

export const CodeMirrorBasicSetup: BasicSetupOptions = {
  autocompletion: false,
};

export const CODEMIRROR_EXTENSIONS: Record<string, LanguageSupport> = {
  python: python(),
  java: java(),
  'c++': cpp(),
};
