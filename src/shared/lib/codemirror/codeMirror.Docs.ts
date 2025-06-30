//언어 선택시 초기 값
export const INITIAL_VALUE = {
  python: `# Python code goes here\nprint("Hello, World!")\n`,
  java: `// Java code goes here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n`,
  'c++': `// C++ code goes here\n#include <iostream>\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}\n`,
};

//기본 언어
export const INITIAL_LANG = 'python';

//언어별 id (웹소켓이 전달받는 언어 id)
export const LANGUAGE_ID = {
  java: 1,
  python: 2,
  'c++': 3,
};

// 초기 소스 코드 데이터
export const INITIAL_SOURCE_CODE_DATA: ICodeEditorSourceCodeData = {
  languageId: LANGUAGE_ID[INITIAL_LANG],
  sourceCode: INITIAL_VALUE[INITIAL_LANG],
};

export const LANGUAGE_SELECTOR_OPTIONS: ICodeEditorLanguageOption[] = [
  { value: 'python', label: 'Python', id: LANGUAGE_ID.python },
  { value: 'java', label: 'Java', id: LANGUAGE_ID.java },
  { value: 'c++', label: 'C++', id: LANGUAGE_ID['c++'] },
];

/*-------------타입 ---------------*/

//소스코드 데이터 타입
export interface ICodeEditorSourceCodeData {
  languageId: number;
  sourceCode: string;
}

//언어 선택 옵션 타입
export interface ICodeEditorLanguageOption {
  value: string;
  label: string;
  id: number;
}
