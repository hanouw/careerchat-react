export default function MyInfo() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-black mb-12">내정보</h1>
      
      <h2 className="font-bold text-lg mb-4 italic">현재 보관 중인 이력서입니다.</h2>
      <div className="w-full h-48 rounded-3xl bg-gradient-to-r from-yellow-100 via-green-400 to-blue-500 mb-20 shadow-xl" />

      <div className="border-t border-gray-100 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold">이력서 수정/업로드 하기</h2>
          <button className="bg-black text-white px-4 py-1.5 rounded-full text-xs">New Upload</button>
        </div>
        <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-300 text-sm">
          Click to browse or drag and drop your files
        </div>
      </div>

      <h2 className="font-bold text-2xl mt-20 mb-8">가고싶은 회사 리스트</h2>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="h-48 bg-blue-100 rounded-3xl opacity-50" />
        <div className="h-48 bg-green-100 rounded-3xl opacity-50" />
      </div>
      {/* 이후 기업 리스트는 Result.jsx와 동일한 스타일로 추가 */}
    </div>
  );
}