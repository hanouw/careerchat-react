import { Link } from 'react-router-dom';
// 컴퓨터와 차트가 합쳐진 이미지 하나만 사용합니다.
import signupImg from '../assets/signup-computer.png'; 

export default function Signup() {
  return (
    <div className="flex min-h-screen bg-[#EEF2FF] relative overflow-hidden">
      
      {/* --- 코드로 구현한 배경 바 (Ribbon) 영역 --- */}
      {/* 뒤쪽 진한 색상 바 (#656ED3) */}
      <div className="absolute left-20 -top-20 w-64 h-[120%] bg-[#656ED3] rounded-[100px] rotate-[15deg] z-0 opacity-90"></div>
      
      {/* 앞쪽 연한 색상 바 (#AFB3FF) */}
      <div className="absolute left-10 -top-20 w-64 h-[120%] bg-[#AFB3FF] rounded-[100px] rotate-[15deg] z-0 shadow-2xl"></div>
      {/* -------------------------------------- */}

      {/* Left Side: Illustration (이미지 하나 + 애니메이션) */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-20 z-10">
        <div className="w-full max-w-lg animate-float-large">
          <img 
            src={signupImg} 
            alt="Signup Illustration" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 z-10">
        <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border border-white/40 shadow-2xl">
          <h2 className="text-xl font-bold mb-8 text-center text-[#1E293B]">Please Fill out form to Register!</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Full name:</label>
              <input 
                type="text" 
                className="w-full p-3 px-6 rounded-full border border-[#C7D2FE] bg-white/80 outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Username:</label>
              <input 
                type="text" 
                className="w-full p-3 px-6 rounded-full border border-[#C7D2FE] bg-white/80 outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
                placeholder="Username"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Email:</label>
              <input 
                type="email" 
                className="w-full p-3 px-6 rounded-full border border-[#C7D2FE] bg-white/80 outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
                placeholder="Email Address"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Password:</label>
                <input 
                  type="password" 
                  className="w-full p-3 px-6 rounded-full border border-[#C7D2FE] bg-white/80 outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Confirm:</label>
                <input 
                  type="password" 
                  className="w-full p-3 px-6 rounded-full border border-[#C7D2FE] bg-white/80 outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
                />
              </div>
            </div>
            
            <button className="w-full py-4 bg-[#6366f1] text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transform active:scale-95 transition-all mt-6 text-sm tracking-wide">
              CREATE ACCOUNT
            </button>
            
            <p className="text-center pt-4 text-xs text-[#64748B]">
              Yes i have an account? <Link to="/login" className="font-bold text-[#1E293B] hover:underline ml-1">Login</Link>
            </p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-[12px] cursor-pointer hover:bg-indigo-700 transition-colors shadow-md">f</div>
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-[12px] cursor-pointer hover:bg-indigo-700 transition-colors shadow-md">w</div>
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-[12px] cursor-pointer hover:bg-indigo-700 transition-colors shadow-md">t</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}