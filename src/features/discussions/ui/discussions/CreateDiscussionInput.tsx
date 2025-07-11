import { Button } from '@/components/ui/button';
import { IDiscussionContentMutationRequest, useCreateDiscussionContent } from '@/query/discussions';
import { DISCUSSION_CREATE_VALUE } from '@/query/discussions/initial.value';
import {
  ILanguageSelectOption,
  INITIAL_LANG,
  LanguageSelector,
  ProblemId,
  ProblemLanguageType,
} from '@/shared';
import { ChangeEvent, useState } from 'react';

interface ICreateDiscussionInputProps {
  problemId: ProblemId;
}
export default function CreateDiscussionInput({ problemId }: ICreateDiscussionInputProps) {
  const [currentLanguage, setCurrentLanguage] = useState<ProblemLanguageType>(INITIAL_LANG);
  const [contentForm, setContentForm] =
    useState<IDiscussionContentMutationRequest>(DISCUSSION_CREATE_VALUE);
  const { mutateAsync } = useCreateDiscussionContent(problemId);

  return (
    <div className="relative">
      <LanguageSelector
        currentLanguage={currentLanguage}
        onSelect={(option: ILanguageSelectOption) => {
          setCurrentLanguage(option.value);
          setContentForm((prev) => ({ ...prev, languageId: option.id }));
        }}
      />
      <textarea
        className="border-1 w-full h-[100px]"
        value={contentForm.content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setContentForm((prev) => ({ ...prev, content: e.target.value }))
        }
      />
      <Button className="absolute right-4 top-5" onClick={() => mutateAsync(contentForm)}>
        토론 생성
      </Button>
    </div>
  );
}
