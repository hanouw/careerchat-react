import { motion } from 'framer-motion';

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
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-gray-400 text-sm mb-10">커리어챗은 다음과 같은 기능을 제공합니다.</p>
      
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
          <p className="text-gray-600 mb-8 font-medium">가고싶은 회사가 있으면 커리어챗은 최대한 도와드리겠습니다</p>
          <button className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            지금 진단받기
          </button>
        </div>
        <div className="flex-1 bg-gray-100 rounded-3xl aspect-square border border-gray-200 overflow-hidden shadow-inner">
           {/* 이미지 01의 우측 모형 자리 */}
           <div className="w-full h-10 bg-white border-b border-gray-200 p-2 flex gap-1">
             <div className="w-2 h-2 rounded-full ml-2 mt-2 bg-red-400"></div>
             <div className="w-2 h-2 rounded-full mt-2 bg-yellow-400"></div>
             <div className="w-2 h-2 rounded-full mt-2 bg-green-400"></div>
           </div>
        </div>
      </div>
    </div>
  );
}