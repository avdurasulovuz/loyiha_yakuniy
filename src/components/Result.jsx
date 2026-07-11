export default function Result() {
  return (
    <section className="w-full bg-[#0B0B22] relative pb-0">
      <div className="max-w-7xl mx-auto flex items-start justify-center gap-16 px-5 pt-16">
        
        {/* Telefon rasmi - to'liq ko'rishi */}
        <div className="relative w-[420px] shrink-0">
          <img
            src="phone-mockup.png"
            alt="phone frame"
            className="relative w-full h-auto z-0"
          />
          <img
            src="today-bg.png"
            alt="app screen"
            className="absolute top-[9%] left-[5%] w-[90%] h-[90%] object-cover rounded-[10px] z-10"
          />
          <img
            src="slider-1-card.png"
            alt="slider"
            className="absolute top-[55%] left-[-15%] w-[75%] z-20 rounded-2xl"
          />
        </div>

        {/* Matn qismi */}
        <div className="max-w-sm pt-20">
          <h2 className="text-white text-4xl font-bold leading-tight">
            Har kunlik foydali odatni joriy eting
          </h2>
          <p className="text-gray-400 text-base mt-4">
            Jonli darslarga qo'shiling va lavozimda topshiriqlarni bajaring – mukammal gibrid o'qitish tajribasi!
          </p>
        </div>

      </div>
    </section>
  )
}