import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="flex min-h-screen bg-[#EEF2FF] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#C7D2FE] opacity-20 transform skew-x-[-12deg] translate-x-20"></div>
      
      {/* Left Side: Illustration Placeholder */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-20 z-10">
        <div className="w-full max-w-xl aspect-video relative flex items-center justify-center">
          {/* Dashboard Mockup Shape */}
          <div className="w-full h-full bg-[#4F46E5] rounded-[2rem] shadow-2xl p-6 relative flex flex-col overflow-hidden">
            <div className="flex space-x-2 mb-6">
              <div className="w-3 h-3 bg-[#FB7185] rounded-full"></div>
              <div className="w-3 h-3 bg-[#FBBF24] rounded-full"></div>
              <div className="w-3 h-3 bg-[#34D399] rounded-full"></div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="w-1/3 bg-white/10 rounded-xl"></div>
              <div className="flex-1 space-y-4">
                <div className="w-full h-24 bg-white/20 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#818CF8]/30 flex items-center justify-center text-white text-4xl">📊</div>
                </div>
                <div className="w-1/2 h-8 bg-white/10 rounded-lg"></div>
              </div>
            </div>
            {/* Floating pop-out element */}
            <div className="absolute -top-10 -right-10 w-48 h-32 bg-[#818CF8] rounded-2xl shadow-xl border-4 border-[#EEF2FF] flex items-center justify-center text-5xl">📈</div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 z-10">
        <div className="w-full max-w-md bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
          <h2 className="text-xl font-bold mb-8 text-center text-[#1E293B]">Please Fill out form to Register!</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Full name:</label>
              <input 
                type="text" 
                className="w-full p-2.5 px-5 rounded-full border border-[#C7D2FE] bg-white outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Username:</label>
              <input 
                type="text" 
                className="w-full p-2.5 px-5 rounded-full border border-[#C7D2FE] bg-white outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Email:</label>
              <input 
                type="email" 
                className="w-full p-2.5 px-5 rounded-full border border-[#C7D2FE] bg-white outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
              />
            </div>
            
            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Password:</label>
              <input 
                type="password" 
                className="w-full p-2.5 px-5 rounded-full border border-[#C7D2FE] bg-white outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-bold text-[#475569] ml-2">Confirm Password:</label>
              <input 
                type="password" 
                className="w-full p-2.5 px-5 rounded-full border border-[#C7D2FE] bg-white outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm text-sm"
              />
            </div>
            
            <button className="w-full py-3 bg-[#6366f1] text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transform active:scale-95 transition-all mt-6 text-sm">
              Register
            </button>
            
            <p className="text-center pt-4 text-xs text-[#64748B]">
              Yes i have an account? <Link to="/login" className="font-bold text-[#1E293B] hover:underline">Login</Link>
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex justify-center space-x-4 pt-6">
              <div className="w-7 h-7 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer hover:bg-indigo-700">f</div>
              <div className="w-7 h-7 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer hover:bg-indigo-700">w</div>
              <div className="w-7 h-7 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer hover:bg-indigo-700">t</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}