import { Link } from 'react-router-dom';
// 이미지들 불러오기
import laptopImg from '../assets/login-computer.png';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-[#EEF2FF] relative overflow-hidden">

      {/* --- 좌하단 캡슐 데코레이션 (테일윈드 버전) --- */}
      <div className="absolute -bottom-16 -left-16 w-80 h-32 bg-[#AFB3FF] rounded-full rotate-90 z-0 animate-shadow-pulse"></div>

      {/* 우측: 보라색 영역 */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#AFB3FF] hidden lg:block"></div>
      
      {/* 왼쪽: 로그인 폼 영역 */}
      <div className="flex-1 flex flex-col justify-center items-center p-12 z-10 relative">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-10 text-center text-[#1E293B]">Welcome Back!</h2>
          <div className="space-y-6">
            {/* input 및 버튼 */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#475569]">Username:</label>
              <input type="text" className="w-full p-3 px-5 rounded-full border border-[#C7D2FE] bg-[#F8FAFC] outline-none focus:ring-2 ring-[#818CF8]" placeholder="Enter your username" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#475569]">Password:</label>
              <input type="password" className="w-full p-3 px-5 rounded-full border border-[#C7D2FE] bg-[#F8FAFC] outline-none focus:ring-2 ring-[#818CF8]" placeholder="Enter your password" />
            </div>
            <button className="w-full py-3.5 bg-[#6366f1] text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transform active:scale-95 transition-all mt-4 text-sm tracking-wide">
              Login
            </button>
            <p className="text-center pt-6 text-sm text-[#64748B]">
              Dont have and account? <Link to="/signup" className="font-bold text-[#1E293B] hover:underline">Register</Link>
            </p>

            {/* Social Icons (기존 코드 유지) */}
            {/* 지금 3개 그냥 디자인처럼 넣었는데 하나로 합쳐서 카톡 로그인 만들어도 됩니다 */}
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-indigo-700 transition-colors">f</div>
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-indigo-700 transition-colors">w</div>
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-indigo-700 transition-colors">t</div>
            </div>
          </div>
        </div>
      </div>

      {/* 오른쪽: 애니메이션 일러스트 영역 */}
      <div className="hidden lg:flex flex-1 items-center justify-center pr-30 z-10 relative">
        <div className="w-full max-w-lg aspect-square relative">
          {/* 컴퓨터 이미지 영역 */}
          <div className="absolute inset-0 flex items-center justify-center z-10 animate-float-large">
            <img src={laptopImg} alt="laptop" className="w-[80%] h-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}