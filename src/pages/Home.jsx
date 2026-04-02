import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- 애니메이션 데이터 ---
const analysisSteps = [
  { id: 1, text: "🔍 텍스트 구조 분석 중...", color: "text-blue-500" },
  { id: 2, text: "💡 '협업 능력' 키워드 감지", color: "text-green-500" },
  { id: 3, text: "⚠️ 구체적 수치 부족함 발견", color: "text-orange-500" },
  { id: 4, text: "✅ 분석 완료: '주도적 실행가' 타입", color: "text-indigo-600" },
];

const FeatureCard = ({ title, sub, color, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col gap-4">
    <div className="text-sm font-bold text-gray-800">
      <p>{title}</p>
      <p className="mt-4 text-xs text-gray-500 leading-relaxed font-normal">{sub}</p>
    </div>
    <div className="mt-auto flex items-center gap-2">
      <div className={`w-8 h-8 rounded-full ${color} opacity-20`} />
      <span className="text-xs font-bold">{desc}</span>
    </div>
  </div>
);

export default function Home() {
  const [step, setStep] = useState(0);

  // 무한 반복 애니메이션 로직
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % (analysisSteps.length + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-gray-600 text-sm mb-10">커리어챗은 다음과 같은 기능을 제공합니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <FeatureCard title="단점과 해결책을 찾으세요." sub="지피지기 백전백승. 솔루션을 제공해드립니다." color="bg-orange-500" desc="단점을 알려드립니다" />
        <FeatureCard title="개선점을 찾고 더 발전하세요." sub="현재에 안주하지 마세요. 개선점을 추천해드립니다." color="bg-blue-500" desc="개선점을 추천해드립니다" />
        <FeatureCard title="장점과 그것을 활용할 방법입니다." sub="이미 뛰어난 부분에 매몰되지 마세요. 충분한 자질에 대해 진단합니다." color="bg-green-500" desc="장점을 알려드립니다" />
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-black leading-tight mb-8">
            포트폴리오, 이력서를 <br />직접 준비했다고 해서 <br />
            그게 당신의 전부가 <br /> 아닙니다.
          </h1>
          <div className="space-y-2 text-gray-500 mb-10">
            <p>잊고 있었던 장점</p>
            <p>그럴줄 몰랐던 단점</p>
            <p>숨겨져있던 내 업무능력</p>
          </div>
        <button 
          style={{ color: 'white' }} // 강제로 인라인 스타일 부여
          className="bg-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
        >
          지금 진단받기
        </button>
        </div>

        {/* --- 인터랙티브 브라우저 모형 --- */}
        <div className="flex-1 bg-white rounded-3xl aspect-square border border-gray-200 overflow-hidden shadow-2xl relative flex flex-col">
           {/* 브라우저 헤더 */}
           <div className="w-full h-10 bg-gray-50 border-b border-gray-200 p-2 flex gap-1.5 items-center">
             <div className="w-3 h-3 rounded-full ml-2 bg-red-400"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div className="w-3 h-3 rounded-full bg-green-400"></div>
             <div className="ml-4 bg-white border border-gray-200 rounded-md px-3 py-0.5 text-[10px] text-gray-400 w-full max-w-[200px]">
               career-chat.io/analysis
             </div>
           </div>

           {/* 브라우저 본문 */}
           <div className="flex-1 p-6 font-mono text-sm relative overflow-hidden bg-slate-50">
             {/* 1. 타이핑되는 자소서 예시 */}
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
               <p className="text-gray-400 text-[10px] mb-2 uppercase tracking-widest font-bold">Input: My_Resume.txt</p>
               <p className="text-gray-700 leading-relaxed overflow-hidden whitespace-nowrap border-r-2 border-black animate-pulse">
                 "저는 협업을 통해 프로젝트를 성공적으로..."
               </p>
             </div>

             {/* 2. 실시간 분석 로그 */}
             <div className="space-y-3">
               <AnimatePresence>
                 {analysisSteps.slice(0, step).map((s) => (
                   <motion.div 
                     key={s.id}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0 }}
                     className={`flex items-center gap-2 ${s.color} font-bold text-[12px]`}
                   >
                     <span className="opacity-50">▸</span> {s.text}
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>

             {/* 3. 최종 결과 팝업 카드 */}
             {step === 4 && (
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 className="absolute inset-0 m-auto w-64 h-40 bg-white rounded-2xl shadow-2xl border-2 border-indigo-500 p-6 flex flex-col items-center justify-center text-center z-20"
               >
                 <div className="text-3xl mb-2">🚀</div>
                 <h4 className="font-black text-gray-800 text-lg">진단 완료!</h4>
                 <p className="text-xs text-gray-500 mt-1">상위 5%의 주도적 실행가 자질이 보입니다.</p>
                 <div className="mt-4 flex gap-2">
                   <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] font-bold">#문제해결</span>
                   <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] font-bold">#협업마스터</span>
                 </div>
               </motion.div>
             )}

             {/* 배경 데코레이션 (그리드) */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
           </div>
        </div>
      </div>
    </div>
  );
}