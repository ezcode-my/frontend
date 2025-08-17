'use client';

import useConnectAlarmWebSocket from '@/features/alarm/hooks/socket/useNotificationWebSocket';
import { useNotificationsStore } from '@/features/alarm/model/store';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Notifications() {
  useConnectAlarmWebSocket();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { notifications } = useNotificationsStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleViewAll = () => {
    router.push('/notifications');
    setOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Image
        src="/icons/notification-icon.svg"
        width={20}
        height={20}
        alt="notification-icon"
        priority
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute left-0 top-full mt-2 w-80 bg-card border border-border rounded-[10px] shadow-hover z-999 bg-[#0c151c]">
          <div className="p-4 border-b border-border">
            <h3 className="font-medium text-foreground">알림</h3>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.content.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-border last:border-b-0 hover:bg-hover-bg transition-colors cursor-pointer ${
                  !notification.isRead ? 'bg-primary/5' : 'bg-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${!notification.isRead ? 'bg-accent' : 'bg-transparent'}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {notification.message}
                    </p>
                    <span className="text-muted text-xs mt-2 block">
                      {notification.createdAt.split('T')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <button
              onClick={handleViewAll}
              className="w-full bg-primary text-primary-foreground rounded-[10px] px-4 py-2 hover:bg-[#276e48] transition-all duration-200 hover:shadow-hover active:bg-[#1e3e2c] active:scale-[0.98]"
            >
              전체보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
