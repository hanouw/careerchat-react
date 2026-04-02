import { Link, Outlet, useLocation } from 'react-router-dom';

export default function RootLayout() {
  // 실제로는 auth context 등에서 가져올 상태입니다.
  const isLoggedIn = false; 

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-100 sticky top-0 bg-white z-50">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-6 h-6 bg-black rounded-full grid grid-cols-2 gap-0.5 p-1">
            <div className="bg-white rounded-full"></div>
            <div className="bg-white rounded-full"></div>
          </div>
          careerChat
        </Link>
        
        <div className="flex gap-6 items-center text-sm font-medium">
          {!isLoggedIn ? (
            <>
              <Link to="/signup" className="text-gray-600">회원가입</Link>
              <Link to="/login" className="bg-black text-white px-5 py-2 rounded-lg">로그인</Link>
              <Link to="/myinfo" className="text-gray-600">내 정보</Link>
            </>
          ) : (
            <>
              <Link to="/result" className="bg-black text-white px-5 py-2 rounded-lg">진단하기</Link>
              <Link to="/result" className="text-gray-600">진단기록</Link>
              <Link to="/myinfo" className="text-gray-600">내 정보</Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="border-t border-gray-100 py-16 px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-2">Namedly</h3>
            <p className="text-gray-400 text-sm">Descriptive line about what your company does.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Features</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Core features</li><li>Pro experience</li><li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Learn more</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Blog</li><li>Case studies</li><li>Customer stories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Support</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Contact</li><li>Support</li><li>Legal</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}