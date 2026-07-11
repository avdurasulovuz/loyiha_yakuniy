export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white">

      {/* Asosiy qism */}
      <div className="max-w-7xl mx-auto px-8 py-16 flex justify-between items-start">

        {/* Logo */}
        <div>
          <img src="https://cambridgeonline.uz/images/logo-white.svg" alt="" className="w-44" />
        </div>

        {/* Havolalar */}
        <div>
          <p className="text-white font-semibold text-2xl mb-6">Cambridge Learning Center</p>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-400 ">Kurslar ↗</a>
              <a href="#" className="text-gray-400 ">Karyera ↗</a>
              <a href="#" className="text-gray-400 ">Sertifikat ↗</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-400 ">Filiallar ↗</a>
              <a href="#" className="text-gray-400 ">IELTS Mock ↗</a>
            </div>
          </div>
        </div>

        {/* Bog'lanish */}
        <div>
          <p className="text-white font-semibold text-2xl mb-6">Biz bilan <br /> bog'laning</p>
          <p className="text-gray-400">📞 +998 78 777 77 74</p>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <p className="text-white font-semibold text-2xl mb-6">Ijtimoiy <br /> tarmoqlarimiz</p>
          <div className="flex gap-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"></a>
          </div>
          <button className="bg-cyan-400 text-white px-10 py-3 rounded-2xl font-medium hover:opacity-90 transition">
            Onlayn to'lash
          </button>
        </div>

      </div>

      {/* Pastki chiziq */}
      <div className="border-t border-gray-700 px-8 py-5 flex justify-between text-gray-500 text-sm max-w-7xl mx-auto">
        <p>Copyright © 2026 Cambridge LLC. All Rights Reserved</p>
        <a href="#" className="hover:text-white">Ommaviy oferta ↗</a>
      </div>

    </footer>
  )
}