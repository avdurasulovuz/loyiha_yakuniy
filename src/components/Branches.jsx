export default function Branches() {
  return (
    <section className="w-full px-5 lg:px-8 bg-white">
      <div className="max-w-l mx-auto py-12 lg:py-20">
        <div>
            {/* Sarlavha */}
        <div className="text-center mb-10">
          <h1 className="text-[#050A41] text-6xl font-semibold">Bizning filiallarimiz</h1>
          <p className="text-[24px] text-[#8284A0] mt-2">
            O'zbekistonning turli nuqtalarida joylashgan barcha filiallarimizni ko'rib chiqing va sizga eng mos keluvchisini tanlang
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4">

          <div>
            <img src="algoritm.jpg" alt="" className="w-full h-full object-cover rounded-4xl" />
          </div>
          <div>
            <img src="drujba1.jpg" alt="" className="w-full h-full object-cover rounded-4xl"  />
          </div>
          <div>
            <img src="novza.jpg" alt="" className="w-full h-full object-cover rounded-4xl" />
          </div>
          <div>
            <img src="tinchlik.jpg" alt="" className="w-full h-full object-cover rounded-4xl"  />
          </div>
          <div className="">
            <img src="yunusobod.jpg" alt="" className="w-full h-full object-cover rounded-4xl" />
          </div>
    
        </div>
        </div>
        
      </div>
    </section>
  )
}