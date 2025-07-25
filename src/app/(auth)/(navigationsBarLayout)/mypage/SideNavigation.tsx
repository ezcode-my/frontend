'use client';
import Report from './../../../../../public/icons/mypage/report.svg';
import Mine from './../../../../../public/icons/mypage/mine.svg';
import Image from 'next/image';
import { User, MessageSquare, Flag, History } from 'lucide-react';
interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}
type MenuItem = 'mine' | 'solved' | 'inquiry' | 'report' | 'changePassword';
export const SideNavigation = ({ tab, setTab }: IProps) => {
  const menuItems = [
    { id: 'mine' as MenuItem, label: '내 정보 확인', icon: User },
    { id: 'report' as MenuItem, label: '신고', icon: Flag },
    { id: 'solved' as MenuItem, label: '문제 푼 기록', icon: History },
    { id: 'inquiry' as MenuItem, label: '문의하기', icon: MessageSquare },
    { id: 'changePassword' as MenuItem, label: '비밀번호 변경', icon: MessageSquare },
  ];

  return (
    <div className="w-64 min-h-screen border-r border-gray-700/50 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">마이페이지</h1>
        <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#00d084' }}></div>
      </div>

      <div className="flex flex-col">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  tab === item.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/8'
                }`}
                style={{
                  backgroundColor: tab === item.id ? '#214d35' : 'transparent',
                }}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        <ul className="text-xl font-semibold">
          <li
            className={`cursor-pointer py-2 px-3 text-center rounded-md ${
              tab === 'changePassword'
                ? 'text-green-400 font-extrabold text-lg'
                : 'text-white text-base font-light'
            }`}
            onClick={() => {
              setTab('changePassword');
            }}
          >
            비밀번호 변경
          </li>
        </ul>
      </div> */}
    </div>
  );
};
