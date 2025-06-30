'use client';

import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { CODEMIRROR_EXTENSIONS, CodeMirrorBasicSetup } from '@/shared/lib/codemirror';
import {
  ICodeEditorLanguageOption,
  INITIAL_LANG,
  INITIAL_VALUE,
} from '@/shared/lib/codemirror/codeMirror.Docs';

interface ICodeEditorProps {
  onChangeSourceCodeData: (key: string, value: string | number) => void;
}

export default function CodeEditor({ onChangeSourceCodeData }: ICodeEditorProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(INITIAL_LANG);

  return (
    <section className="flex-1 h-full">
      <LanguageSelector
        currentLanguage={currentLanguage}
        onSelect={(option: ICodeEditorLanguageOption) => {
          setCurrentLanguage(option.value);
          onChangeSourceCodeData('languageId', option.id);
          onChangeSourceCodeData(
            'sourceCode',
            INITIAL_VALUE[option.value as keyof typeof INITIAL_VALUE]
          );
        }}
      />
      <CodeMirror
        basicSetup={CodeMirrorBasicSetup}
        value={INITIAL_VALUE[currentLanguage as keyof typeof INITIAL_VALUE]}
        theme={'dark'}
        onChange={(value) => onChangeSourceCodeData('sourceCode', value)}
        extensions={[CODEMIRROR_EXTENSIONS[currentLanguage]]}
        aria-autocomplete="none"
        autoCapitalize="off"
        height="100%"
        className="h-[450px] overflow-scroll "
      />
    </section>
  );
}
