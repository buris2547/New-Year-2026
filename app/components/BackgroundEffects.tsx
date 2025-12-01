interface BackgroundEffectsProps {}

export default function BackgroundEffects({}: BackgroundEffectsProps) {
  return (
    <>
      {/* พื้นหลังดาว */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* เอฟเฟกต์แสงเรืองรอง */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* ลูกบอลวาววับ */}
      <div className="firework firework-1"></div>
      <div className="firework firework-2"></div>
      <div className="firework firework-3"></div>
    </>
  );
}
