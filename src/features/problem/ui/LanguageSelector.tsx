'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LanguageSelector({
  currentLanguage,
  onSelect,
}: {
  currentLanguage: string;
  onSelect: (value: string) => void;
}) {
  const handleChangeCurrentLanguage = (value: string) => {
    onSelect(value);
  };

  return (
    <Select onValueChange={handleChangeCurrentLanguage}>
      <SelectTrigger>
        <SelectValue placeholder={currentLanguage}></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="python">python</SelectItem>
          <SelectItem value="c++">c++</SelectItem>
          <SelectItem value="java">java</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
