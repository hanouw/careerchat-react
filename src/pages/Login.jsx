import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-[#EEF2FF] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C7D2FE] rounded-full opacity-50 transform rotate-45"></div>
      
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-12 z-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-10 text-center text-[#1E293B]">Welcome Back!</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#475569]">Username:</label>
              <input 
                type="text" 
                className="w-full p-3 px-5 rounded-full border border-[#C7D2FE] bg-[#F8FAFC] outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm"
                placeholder="Enter your username"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#475569]">Password:</label>
              <input 
                type="password" 
                className="w-full p-3 px-5 rounded-full border border-[#C7D2FE] bg-[#F8FAFC] outline-none focus:ring-2 ring-[#818CF8] transition-all shadow-sm"
                placeholder="Enter your password"
              />
            </div>
            
            <button className="w-full py-3.5 bg-[#6366f1] text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transform active:scale-95 transition-all mt-4 text-sm tracking-wide">
              Login
            </button>
            
            <p className="text-center pt-6 text-sm text-[#64748B]">
              Dont have and account? <Link to="/signup" className="font-bold text-[#1E293B] hover:underline">Register</Link>
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex justify-center space-x-4 pt-8">
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-indigo-700 transition-colors">f</div>
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-indigo-700 transition-colors">w</div>
              <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-indigo-700 transition-colors">t</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Illustration Placeholder */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-20 relative">
        <div className="w-full max-w-lg aspect-square relative flex items-center justify-center">
          {/* Mockup 3D Shape */}
          <div className="absolute inset-0 bg-[#C7D2FE] rounded-[3rem] transform -rotate-6 opacity-30"></div>
          <div className="w-[80%] h-[80%] bg-[#4F46E5] rounded-[2.5rem] shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="text-white text-[12rem] select-none transform group-hover:scale-110 transition-transform duration-500">💻</div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-[#FCD34D] rounded-full blur-2xl opacity-50"></div>
          </div>
          {/* Floating elements */}
          <div className="absolute top-20 right-10 w-24 h-6 bg-[#FB7185] rounded-full transform rotate-12 animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-32 h-6 bg-[#FBBF24] rounded-full transform -rotate-12"></div>
        </div>
      </div>
    </div>
  );
}