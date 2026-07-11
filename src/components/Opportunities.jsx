export default function Opportunities() {
  return (
     <section className="w-full px-5  bg-white">
      <div className="max-w-7xl mx-auto py-12 ">
        <div className="text-center ">
          <h1 className="text-[#050A41] text-6xl  font-semibold">Sertifikatlarimiz kuchi</h1>
          <p className="text-[24px] text-[#8284A0] mt-2">Kelajagingizni yo'l oching – bizning sertifikatlarimiz universitetga kirish va <br /> kasbiy faoliyatga eshiklarni ochadi!</p>
            </div>
          <div className="grid grid-cols-3">
             {/* 1-quti uchun */}
             <div className="w-120 h-100 rounded-4xl bg-[#F8F9FA] mt-10">
              <img src="logo.jpg" alt="" className="w-20 h-20 mx-12 mt-6" />
              <p className="text-[24px] text-[#050A41] mx-7 mt-4">Bizning sertifikatlar eng top ish beruvchilar tomonidan e'tirof etilgan  bo'lib, ish topishingizga yordam beradi. Undan tashqari, biz professional  rezyumeingizni yaratish uchun 'CV builder' xizmatini taklif etamiz.</p>

             <div className="grid grid-cols-2 mt-10 ">

              <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl mt-12 ">
                <img src="https://cambridgeonline.uz/images/logo-cambridge.svg" alt="" className="mx-10 my-6"  />
              </div>
              <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl mt-12  ">
                <img src="https://cambridgeonline.uz/images/logo-safia.svg" alt="" className="mx-16 my-6"  />
              </div>
              <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl  mt-4 ">
                <img src="https://cambridgeonline.uz/images/logo-mars.svg" alt="" className="mx-9 my-14"  />
              </div>
              <div className="bg-[#F8F9FA] w-50 h-40 rounded-2xl mt-4">
                    <h2 className="text-4xl mx-8 font-semibold pt-4">15+</h2>
                    <p className="mx-8 text-xl text-[#7F81BE]">kompaniyalar <br />bizga ishonishadi</p>
              </div>
             </div>
             </div>

             <div >
              <img src="certificates-banner.png" alt="" className=" w-120 h-190 mt-10 mx-24" />
             </div>

             {/* 3-quti */}

               <div className="w-120 h-100 rounded-4xl bg-[#F8F9FA] mt-10 mx-38 ">
              <img src="logo1.jpg" alt="" className="w-20 h-20 mx-12 mt-6" />
              <p className="text-[24px] text-[#050A41] mx-7 mt-4">
                 Bizning sertifikatlarimiz mamlakatdagi eng yaxshi universitetlar tomonidan tan olingan bo'lib, bu yordamida siz IELTS sertifikatiga ehtiyoj sezmasdan universitetga kirishingiz mumkin.</p>

                 <div className=" grid grid-cols-2 mt-30">
                   <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl  ">
                      <img src="https://cambridgeonline.uz/images/logo-amity.svg" alt=""  className="mx-6 my-14" />
                   </div>

                   <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl px-12 mx-6">
                    <img src="https://cambridgeonline.uz/images/logo-east-london.svg" alt="" className="mx-3 my-6" />
                   </div>

                   <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl mt-4 ">
                    <img src="https://cambridgeonline.uz/images/logo-hertfordshire.svg" alt="" className="mx-5 my-16" />
                   </div>

                   <div  className="bg-[#F8F9FA] w-50 h-40 rounded-2xl mt-4 mx-6 ">
                    <h2 className="text-4xl mx-8 font-semibold pt-4  ">10+</h2>
                    <p className="mx-8 text-xl text-[#7F81BE]">universitetlar tan <br /> olishadi</p>
                   </div>
                 </div>
             </div>
             </div>
         
      </div>
    </section>
  )
}