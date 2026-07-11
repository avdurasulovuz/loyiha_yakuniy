import { Link } from "react-router-dom";
export default function Header() {
  return (
    <section className="w-full px-5  bg-white">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src="cambridge.jpg" alt="" className="h-15 w-15" />
            <div className="leading-tight">
              <div className="text-2xl font-semibold text-[#322777] tracking-tight">
                CAMBRIDGE
              </div>
              <div className="text-[10px] font-semibold text-slate-500 tracking-widest">
                LEARNING CENTER
              </div>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8 mx-12 ">
            <a href="#" className="text-xl text-slate-800 hover:text-blue-600 transition-colors">
              Kurslar
            </a>
            <a href="#" className="text-xl text-slate-800 hover:text-blue-600 transition-colors">
              Filiallar
            </a>
            <a href="#" className="text-xl text-slate-800 hover:text-blue-600 transition-colors">
              Karyera
            </a>
            <a href="#" className="text-xl text-slate-800 hover:text-blue-600 transition-colors whitespace-nowrap">
              IELTS Mock
            </a>
            <a href="#" className="text-xl text-slate-800 hover:text-blue-600 transition-colors ">
              Sertifikat
            </a>
          </nav>

          {/* */}
          <div className="hidden lg:flex items-center gap-6 mx-24">

            {/* Til tanlash */}
            <button className="flex items-center gap-2 px-3 py-3 rounded-xl border border-white text-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <img src="https://cambridgeonline.uz/images/icons/flag-uz.svg" alt="UZ" className="w-10 h-6" />
              Uzb
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Ommaviy oferta */}
            <button className="px-8 py-4 rounded-2xl text-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 shadow-sm transition-colors  whitespace-nowrap">
              Ommaviy oferta
            </button>

            {/* Kirish */}
          
             <button className=" px-8 py-4 rounded-2xl text-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-sm transition-colors">
              Kirish"
             </button>
             
            

            {/* Dark mode toggle */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#CDCED9] hover:bg-slate-100 transition-colors ">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
          </div>

          {/*  menu  */}
          <button className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
        <div className="flex">
          <h2 className="text-[80px]  font-extrabold mt-20 leading-24 text-[#050A41]">Biz nafaqat ingliz tilini o'rgatamiz, balki insonlar hayotini o'zgartiramiz! </h2>
          <img src="new-books.webp" alt="books" className="w-220 h-160 mx-26 my-44"/>
        </div>
        <div>
           <h3 className="-mt-76 text-xl font-semibold text-[#00348C]">11 yil ichida Cambridge, 100 000 dan ortiq yoshlar hayotini <br />o'zgartirishga hissa qo'shdi</h3>
           <button className="w-84 h-20 bg-sky-300 rounded-xl  text-[18px] my-8 font-extrabold text-[#050A41]">Birinchi darslarga yozilish</button>
        </div>
        
      </div>
    </section>
  )
}