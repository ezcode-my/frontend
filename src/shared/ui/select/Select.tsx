'use client';

import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PropsType {
  option: { label: string; value: string | number }[];
  title: string;
  className: string;
  onChange: (value: string) => void;
}

export const Select = (props: PropsType) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState<string | null>('');
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log('selected', selected);
    if (!selected) return;
    props.onChange(selected);
  }, [selected]);

  return (
    <div className="relative" ref={selectRef}>
      <button
        onClick={() => {
          setDropdown((prev) => !prev);
        }}
        className={twMerge(
          `dropdown-trigger relative w-[100px] flex h-10 items-center justify-between rounded-md border px-3 py-2 text-sm bg-gray-800 border-gray-700 text-white ${props.className}`
        )}
        aria-expanded={dropdown}
      >
        <span className="truncate">{selected || props.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            'lucide lucide-chevron-down h-4 w-4 opacity-50 transition-transform duration-200',
            dropdown && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={twMerge(
          'absolute top-11 flex flex-col bg-gray-800 border border-gray-700 rounded w-1/3 z-10 transition-all duration-200 origin-top ',
          dropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <div
          className="flex flex-row gap-2 items-center px-1 hover:bg-white hover:text-black cursor-pointer py-1 rounded "
          onClick={() => {
            setSelected('');
            setDropdown(false);
          }}
        >
          <span className="ml-5 w-3">{'' === selected && '✔'}</span>
          <span className=" ">전체</span>
        </div>
        {props.option.map((item) => (
          <div
            className="flex flex-row gap-2 items-center px-1 hover:bg-white hover:text-black cursor-pointer py-1 rounded "
            onClick={() => {
              setSelected(item.label);
              setDropdown(false);
            }}
          >
            <span className="ml-5 w-3">{item.label === selected && '✔'}</span>
            <span key={item.value} className=" ">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
