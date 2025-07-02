import { ChevronUp } from 'lucide-react';
import ProblemTable from './Table';
const ProblemsList = () => {
  return (
    <div className="flex-col px-10 py-18 w-full">
      <section className="flex flex-row justify-between items-center">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-green-700 text-white rounded-[15px] px-4 py-1 shadow">
            카테고리
            <ChevronUp size={14} />
          </button>
          <button className="flex items-center gap-2 bg-green-700 text-white rounded-[15px] px-4 py-1 shadow">
            난이도
            <ChevronUp size={14} />
          </button>
        </div>
        <div className="flex flex-row gap-1 bg-[#30333C] rounded-[25px] px-5 py-3">
          <input className="min-w-[400px] border-none outline-none" />
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7751 0.734863C24.1269 0.734863 30.898 7.50521 30.8982 15.8569L30.8933 16.2476C30.809 19.5745 29.65 22.6344 27.7507 25.0933L35.4509 32.7935L31.9158 36.3286L24.0818 28.4946C21.6975 30.0649 18.8434 30.98 15.7751 30.98L15.3855 30.9751C7.21385 30.7682 0.653076 24.0784 0.653076 15.8569C0.653281 7.50534 7.42355 0.735068 15.7751 0.734863ZM15.7751 5.73486C10.185 5.73507 5.65328 10.2668 5.65308 15.8569C5.65308 21.4473 10.1848 25.9798 15.7751 25.98C21.3656 25.98 25.8982 21.4474 25.8982 15.8569C25.898 10.2666 21.3655 5.73486 15.7751 5.73486Z"
              fill="#00A141"
            />
          </svg>
        </div>
      </section>
      <ProblemTable />
    </div>
  );
};

export default ProblemsList;
