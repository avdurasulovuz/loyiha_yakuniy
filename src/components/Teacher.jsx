export default function Teacher() {
  return (
    <section className="w-full px-5 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-12 lg:py-20">
        <div className="text-center">
          <h1 className="text-[#050A41] text-7xl font-semibold">
            Bizning o'qituvchilarimiz
          </h1>
          <p className="text-[#B0B1C3] text-[26px] mt-4">
            Haqiqiy qahramonlarimiz, quyida ular bilan tanishib chiqishingiz mumkin
          </p>
        </div>

        {/* ustozlar  */}
        <div className="flex items-start gap-8 mt-14">

          {/* Chap - kartalar */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F0F2F8] rounded-2xl px-4 py-4 flex items-center gap-4 w-84">
              <img
                src="https://app.cambridgeonline.uz/storage/site/e52fa4ab-25a6-457e-85ee-f06330e647e3_thumb.png"
                alt="Sardor Erkinov"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-[#050A41] text-2xl font-semibold">Sardor Erkinov</h2>
                <p className="text-[#B0B1C3] text-[18px]">IELTS 8.5</p>
              </div>
            </div>

            <div className="bg-[#F0F2F8] rounded-2xl px-4 py-4 flex items-center gap-4 w-84">
              <img
                src="https://app.cambridgeonline.uz/storage/site/13500b16-07b3-46c5-b2c2-4c2927e985a7_thumb.png"
                alt="Jakhongir Abbasov"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-[#050A41] text-2xl font-semibold">Jakhongir Abbasov</h2>
                <p className="text-[#B0B1C3] text-[18px]">IELTS 8.5</p>
              </div>
            </div>

            <div className="bg-[#F0F2F8] rounded-2xl px-4 py-4 flex items-center gap-4 w-84">
              <img
                src="https://app.cambridgeonline.uz/storage/site/ff755a4e-26c0-4ccb-b383-8b138528af7e_thumb.png"
                alt="Alijon Rakhmatov"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-[#050A41] text-2xl font-semibold">Alijon Rakhmatov</h2>
                <p className="text-[#B0B1C3] text-[18px]">IELTS 8.5</p>
              </div>
            </div>
          </div>

          {/* O'ng tomom */}
          <div className="flex-1 w-220 h-120">
            <video
              src="https://app.cambridgeonline.uz/storage/site/bd4cba71-5b6e-4fea-b927-045a01566ca5.mp4"  
              className="rounded-2xl "/>

          </div>

          {/* matn */}
          <div className="flex-2">
            <p className="text-xl mt-2">Mr. Sardor - “IELTS INSTRUCTOR OF 2023” nominatsiyasi g’olibi bo’lganman. Mening asosiy maqsadim - imkon qadar ko'proq yuqori ball (7.0+) chiqarish. Agar siz writing va reading’ni oshirishni istasangiz, men bilan adashmaysiz.</p>
            
          <div className="flex">
            <div className="group bg-[#F0F2F8] h-36 w-64 mx-4 mt-6 hover:bg-[#1CAAF2] rounded-2xl">
            <div className="bg-[#1CAAF2] w-6 h-6 rounded-4xl mx-72 mt-6 group-hover:bg-white"></div>
            <p className="font-semibold text-black text-4xl px-6">6+</p><br />
            <p className="text-[#8284A0] text-[22px] -mt-6 px-6 ">years of experience</p></div>

            <div className="group bg-[#F0F2F8] h-36 w-64 mx-4 mt-6 hover:bg-[#EE5B0A] rounded-2xl transition-colors">
            <div className="bg-\[#EE5B0A] group-ho/ver:bg-[#F7F7F7] w-6 h-6 rounded-full mx-72 mt-6"></div>
            <p className="font-semibold text-black text-4xl px-6">20000+</p><br />
            <p className="text-[#8284A0]  text-[22px] -mt-6 px-6">students studied</p></div>
          </div>
          
          </div>
          

        </div>
      </div>
    </section>
  );
}