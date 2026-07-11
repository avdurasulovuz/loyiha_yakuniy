export default function Hero() {
  return (
    <section className="w-full px-5 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-12 lg:py-20">

        <div className="flex justify-between">

          <div className="group bg-[#F7F7F7] h-48 w-86 mx-2 hover:bg-[#1CAAF2] rounded-2xl">
          <div className="bg-[#1CAAF2] w-6 h-6 rounded-4xl mx-72 mt-6 group-hover:bg-white"></div>
          <p className="font-semibold text-black text-6xl mx-12">11+</p><br />
          <p className="text-[#8284A0] text-2xl -mt-8 mx-6 mx-12 pt-2">yillik tajriba</p></div>


         <div className="group bg-[#F7F7F7] h-48 w-86 mx-2 hover:bg-[#EE5B0A] rounded-2xl transition-colors">
         <div className="bg-[#EE5B0A] group-hover:bg-[#F7F7F7] w-6 h-6 rounded-full mx-72 mt-6"></div>
         <p className="font-extrabolt text-black text-6xl p-5">100,000+</p><br />
         <p className="text-[#8284A0] text-2xl -mt-8 mx-6 whitespace-nowrap">ingliz tilini o'rgangan yoshlar</p></div>

          
         <div className="group bg-[#F7F7F7] h-48 w-86 mx-2 hover:bg-[#F59200] rounded-2xl transition-colors">
         <div className="bg-[#F59200] group-hover:bg-[#F7F7F7] w-6 h-6 rounded-full mx-72 mt-6 "></div>
         <p className="font-extrabolt text-black text-6xl p-5">16</p><br />
         <p className="text-[#8284A0] text-2xl -mt-8 mx-6 ">O'zbekiston bo'ylab filialari soni</p></div>

         <div className="group bg-[#F7F7F7] h-48 w-86 mx-2 hover:bg-[#4AAC16] rounded-2xl ">
         <div className="bg-[#4AAC16] group-hover:bg-[#F7F7F7] w-6 h-6 rounded-full mx-72 mt-6"></div>
         <p className="font-extrabolt text-black text-6xl px-6">500+</p><br />
         <p className="text-[#8284A0] text-2xl -mt-6 px-6 ">Cambridgedagi xodimlar soni</p></div>
        
        </div>

      </div>
    </section>
  )
}