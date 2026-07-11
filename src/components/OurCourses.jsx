export default function OurCourses() {
  return (
    <section className="w-full px-5 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto py-12 lg:py-20">

        {/* Sarlavha */}
        <div className="text-center mb-10">
          <h1 className="text-[#050A41] text-6xl font-semibold">Bizning kurslarimiz</h1>
          <p className="text-[24px] text-[#8284A0] mt-2">
            O'quv markazimizda mavjud bo'lgan kurslarimizni o'qib chiqing va sizga eng <br />
            mos keluvchisini tanlang
          </p>
        </div>

        {/* Kurslar grid */}
        <div className="grid grid-cols-2 gap-6">

          {/* General English */}
          <div className="bg-[#F7F7F7] rounded-4xl p-8 flex flex-col justify-between">
            
            {/* Yuqori qism */}
            <div>
              <div className="flex items-center gap-4 mb-6 w-20 h-20 bg-blue-500 rounded-full ">
                <img src="https://cambridgeonline.uz/images/icons/ge.svg" alt="" className="w-14 h-14 mx-3" />
                <h2 className="font-semibold text-3xl text-[#050A41]">General English</h2>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/blue-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    5 ta daraja (Beginnerdan Upper-Intermediate / Pre-IELTSgacha), har biri 3 oy. Dastur yakunida mustahkam ingliz tili bazasi shakllanadi.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/blue-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Darslar haftasiga 3 marta, 80 daqiqa. Cambridge University Press'ning Prepare tizimi asosida.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/blue-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Yakshanba tadbirlari: Movie Day, Speaking Club, debatlar va mehmonlar bilan seminarlar.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/blue-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    O'tkazib yuborilgan darslar uchun yordamchi o'qituvchi ko'magi mavjud.
                  </p>
                </li>
              </ul>
            </div>

            {/* Tugma */}
            <button className="mt-52 w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white text-lg font-medium py-4 rounded-2xl hover:opacity-90 transition">
              Birinchi darsga yoziling ✦
            </button>

          </div>

            {/* General English */}
          <div className="bg-[#F7F7F7] rounded-4xl p-8 flex flex-col justify-between">
            
            {/* Yuqori qism */}
            <div>
              <div className="flex items-center gap-4 mb-6 w-20 h-20 bg-[#ED7117] rounded-full ">
                <img src="https://cambridgeonline.uz/images/icons/ielts.svg" alt="" className="w-14 h-14 mx-3" />
                <h2 className="font-semibold text-3xl text-[#050A41]">Upper-Intermediate / Pre-IELTS</h2>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                   Haftasiga 3 marta, 80 daqiqalik darslar. Upper-Intermediate akademik ingliz tili va IELTS tayyorgarligining boshlang‘ich bosqichi.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Darslar haftasiga 3 marta, 80 daqiqa. Cambridge University Press'ning Prepare tizimi asosida.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Yakshanba tadbirlari: Movie Day, Speaking Club, debatlar va mehmonlar bilan seminarlar.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    O'tkazib yuborilgan darslar uchun yordamchi o'qituvchi ko'magi mavjud.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Writing Task 1 & 2 strukturasi, yuqori ball iboralari va argument qurish texnikalari.
                  </p>
                </li>
                 <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Speaking Part 1–2–3 amaliyoti, real imtihon formatida professional feedback.
                  </p>
                </li>
                 <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/orange-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Doimiy progress monitoring va qo‘shimcha akademik materiallar.
                  </p>
                </li>
              </ul>
            </div>

            {/* Tugma */}
            <button className="mt-8 w-full bg-gradient-to-r from-[#F28100] to-[#F5A623] text-white text-lg font-medium py-4 rounded-2xl hover:opacity-90 transition">
            Birinchi darsga yoziling ✦
            </button>

          </div>

          {/* General English */}
          <div className="bg-[#F7F7F7] rounded-4xl p-8 flex flex-col justify-between">
            
            {/* Yuqori qism */}
            <div>
              <div className="flex items-center gap-4 mb-8 w-20 h-20  bg-green-500 rounded-full ">
                <img src="https://cambridgeonline.uz/images/icons/ielts.svg" alt="" className="w-14 h-14 mx-3" />
                <h2 className="font-semibold text-3xl text-[#050A41]">Upper-Intermediate / Pre-IELTS</h2>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    5 ta daraja (Beginnerdan Upper-Intermediate / Pre-IELTSgacha), har biri 3 oy. Dastur yakunida mustahkam ingliz tili bazasi shakllanadi.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Darslar haftasiga 3 marta, 80 daqiqa. Cambridge University Press'ning Prepare tizimi asosida.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Yakshanba tadbirlari: Movie Day, Speaking Club, debatlar va mehmonlar bilan seminarlar.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    O'tkazib yuborilgan darslar uchun yordamchi o'qituvchi ko'magi mavjud.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Listening va Reading: vaqtni boshqarish va murakkab savol turlari ustida intensiv ishlash.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Ko‘proq sonli to‘liq formatdagi IELTS mock exam va individual progress monitoring.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/green-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Kurs yakunida talabalar rasmiy imtihonga ishonch bilan kirish darajasiga yetadilar.
                  </p>
                </li>
              </ul>
            </div>

            {/* Tugma */}
            <button className="mt-8 w-full bg-gradient-to-r from-[#5DB113] to-[#7EC832] text-white text-lg font-medium py-4 rounded-2xl hover:opacity-90 transition">
           Birinchi darsga yoziling ✦
          </button>

          </div>

          {/* General English */}
          <div className="bg-[#F7F7F7] rounded-4xl p-8 flex flex-col justify-between">
            
            {/* Yuqori qism */}
            <div>
              <div className="flex items-center gap-4 mb-6 w-20 h-20  bg-gray-600 rounded-full ">
                <img src="https://cambridgeonline.uz/images/icons/ielts.svg" alt="" className="w-14 h-14 mx-3" />
                <h2 className="font-semibold text-3xl text-[#050A41]">Upper-Intermediate / Pre-IELTS</h2>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    5 ta daraja (Beginnerdan Upper-Intermediate / Pre-IELTSgacha), har biri 3 oy. Dastur yakunida mustahkam ingliz tili bazasi shakllanadi.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Darslar haftasiga 3 marta, 80 daqiqa. Cambridge University Press'ning Prepare tizimi asosida.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Yakshanba tadbirlari: Movie Day, Speaking Club, debatlar va mehmonlar bilan seminarlar.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Writing: murakkab argumentatsiya, mukammal struktura, advanced grammar va collocations, professional feedback.
                  </p>
                </li>
                 <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Muntazam to‘liq formatdagi IELTS mock exam va individual strategik tahlil.
                  </p>
                </li>
                 <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Listening va Reading: maksimal aniqlik, tezlik va vaqtni mukammal boshqarish.
                  </p>
                </li>
                 <li className="flex items-start gap-3">
                  <img src="https://cambridgeonline.uz/images/icons/black-check.svg" alt="" className="w-10 h-5 mt-1 flex-shrink-0" />
                  <p className="text-[#3D3F5A] text-base leading-6">
                    Kurs yakunida talabalar yuqori band olishga tayyor holatga yetadilar.
                  </p>
                </li>
              </ul>
            </div>

            {/* Tugma */}
            <button className="mt-8 w-full bg-gradient-to-r from-[#202020] to-[#404040] text-white text-lg font-medium py-4 rounded-2xl hover:opacity-90 transition">
             Birinchi darsga yoziling ✦
            </button>
          

          </div>

        </div>
      </div>
    </section>
  )
}