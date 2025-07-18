'use client';

import useConnectAlarmWebSocket from '@/features/alarm/hooks/useAlarmWebSocket';
import Image from 'next/image';
import { useState } from 'react';

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const { alarm } = useConnectAlarmWebSocket();
  console.log('알림:', alarm);
  return (
    <div className="relative">
      <Image
        src="/icons/notification-icon.svg"
        width={48}
        height={48}
        alt="notification-icon"
        priority
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute top-full right-0 mt-2 w-[300px] bg-white shadow-xl rounded-xl p-4 z-50">
          <p className="text-sm font-bold">AI 코드리뷰 알림</p>
          <ul className="mt-2 text-sm">
            <li>• "코드 내용"에 리뷰가 달렸습니다</li>
            <li>• 리뷰가 삭제되었습니다</li>
            <li>• ...</li>
          </ul>
        </div>
      )}
    </div>
  );
}
