'use client';

import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { CODEMIRROR_EXTENSIONS, CodeMirrorBasicSetup } from '../lib/codeMirror.setup';
import LanguageSelector from './LanguageSelector';
import { INITIAL_LANG, INITIAL_VALUE } from '../lib/codeMirror.initialDoc';

export default function CodeEditor() {
  const [currentLanguage, setCurrentLanguage] = useState<string>(INITIAL_LANG);
  const [value, setValue] = useState(
    INITIAL_VALUE[currentLanguage as keyof typeof INITIAL_VALUE] || ''
  );

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <section className="flex-1 h-full">
      <LanguageSelector
        currentLanguage={currentLanguage}
        onSelect={(value: string) => setCurrentLanguage(value)}
      />
      <CodeMirror
        basicSetup={CodeMirrorBasicSetup}
        value={value}
        theme={'dark'}
        onChange={onChange}
        extensions={[CODEMIRROR_EXTENSIONS[currentLanguage]]}
        aria-autocomplete="none"
        autoCapitalize="off"
        height="100%"
        className="h-[450px] overflow-scroll "
      />
    </section>
  );
}
