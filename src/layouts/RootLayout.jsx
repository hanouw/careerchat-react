import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // 실제 인증 상태 연동 필요

  // 메뉴 닫기 함수 (링크 클릭 시 메뉴 닫힘)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* --- 네비게이션 바 --- */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-gray-100 sticky top-0 bg-white z-[100]">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-6 h-6 bg-black rounded-full grid grid-cols-2 gap-0.5 p-1">
            <div className="bg-white rounded-full"></div>
            <div className="bg-white rounded-full"></div>
          </div>
          careerChat
        </Link>
        
        {/* 1. 데스크탑 메뉴 (md 이상에서만 표시) */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {!isLoggedIn ? (
            <>
              <Link to="/signup" className="text-gray-600 hover:text-black">회원가입</Link>
              <Link to="/login" className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">로그인</Link>
              <Link to="/myinfo" className="text-gray-600 hover:text-black">내 정보</Link>
            </>
          ) : (
            <>
              <Link to="/result" className="bg-black text-white px-5 py-2 rounded-lg">진단하기</Link>
              <Link to="/result" className="text-gray-600">진단기록</Link>
              <Link to="/myinfo" className="text-gray-600">내 정보</Link>
            </>
          )}
        </div>

        {/* 2. 모바일 토글 버튼 (md 미만에서만 표시) */}
        <button 
          className="md:hidden p-2 text-gray-600 bg-black rounded-lg focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* 아이콘 변경 애니메이션 */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* 3. 모바일 드롭다운 메뉴 (애니메이션 적용) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20.25 left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden z-[90]"
            >
              <div className="flex flex-col p-6 gap-4 font-semibold">
                {!isLoggedIn ? (
                  <>
                    <Link to="/signup" onClick={closeMenu} className="py-2 text-gray-600 border-b border-gray-50">회원가입</Link>
                    <Link to="/login" onClick={closeMenu} className="py-2 text-gray-600 border-b border-gray-50">로그인</Link>
                    <Link to="/myinfo" onClick={closeMenu} className="py-2 text-gray-600">내 정보</Link>
                  </>
                ) : (
                  <>
                    <Link to="/result" onClick={closeMenu} className="py-2 text-black font-black">진단하기 🚀</Link>
                    <Link to="/result" onClick={closeMenu} className="py-2 text-gray-600 border-b border-gray-50">진단기록</Link>
                    <Link to="/myinfo" onClick={closeMenu} className="py-2 text-gray-600">내 정보</Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="border-t border-gray-100 bg-white pt-16 pb-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* 메인 푸터 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 mb-12">
            
            {/* 1. 브랜드 섹션 (모바일에서도 유지하되 설명은 간결하게) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4">
                <div className="w-5 h-5 bg-black rounded-full grid grid-cols-2 gap-0.5 p-0.5">
                  <div className="bg-white rounded-full"></div>
                  <div className="bg-white rounded-full"></div>
                </div>
                careerChat
              </Link>
            </div>

            {/* 2. 링크 섹션들 (모바일에서는 2열로 배치하여 공간 절약) */}
            <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-900">Service</h4>
                <ul className="text-gray-500 text-sm space-y-3">
                  <li><Link to="/result" className="hover:text-black transition-colors">AI 진단</Link></li>
                  <li><Link to="/pricing" className="hover:text-black transition-colors">이용 요금</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-900">Support</h4>
                <ul className="text-gray-500 text-sm space-y-3">
                  <li><Link to="/faq" className="hover:text-black transition-colors">자주 묻는 질문</Link></li>
                  <li><Link to="/contact" className="hover:text-black transition-colors">문의하기</Link></li>
                </ul>
              </div>

              {/* 모바일에서는 이 섹션을 숨기거나 Support에 합칠 수 있습니다. */}
              <div className="hidden md:block">
                <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-900">Legal</h4>
                <ul className="text-gray-500 text-sm space-y-3">
                  <li><Link to="/privacy" className="hover:text-black transition-colors">개인정보처리방침</Link></li>
                  <li><Link to="/terms" className="hover:text-black transition-colors">이용약관</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 하단 바 (저작권 및 소셜) */}
          <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-[12px]">
              © 2026 careerChat. All rights reserved.
            </p>
            
            {/* 소셜 아이콘 - 모바일에서는 더 간결하게 아이콘만 */}
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-black transition-colors text-xs font-medium">Twitter</a>
              <a href="#" className="hover:text-black transition-colors text-xs font-medium">Instagram</a>
              <a href="#" className="hover:text-black transition-colors text-xs font-medium">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}