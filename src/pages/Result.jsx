export default function Result() {
  const list = [
    { name: 'Agency name', year: '2025' },
    { name: 'Studio name', year: '2024' },
    { name: 'Company name', year: '2023' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-black text-center mb-16">당신의 기업 적합도는 <span className="text-blue-600">X%</span> 입니다</h1>
      
      <div className="flex flex-col md:flex-row gap-10 items-center mb-20 bg-[#f9fdf9] p-10 rounded-3xl border border-green-50">
        <div className="w-72 h-48 bg-green-200 rounded-2xl flex items-center justify-center text-6xl">👩‍💻</div>
        <div className="space-y-2 font-bold text-xl">
          <p>한줄요약</p>
          <p className="text-gray-400">개선점</p>
          <p className="text-gray-400">단점</p>
          <p className="text-gray-400">장점</p>
        </div>
      </div>

      <div className="space-y-4">
        {list.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-6 border-b border-gray-100 px-4 hover:bg-gray-50 transition-colors">
            <span className="text-2xl font-black">{item.name}</span>
            <span className="text-gray-400 font-mono">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}