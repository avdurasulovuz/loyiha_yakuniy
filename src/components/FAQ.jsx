import { useState } from "react"

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      savol: "Gibrid ta'lim tizimi nima degani?",
      javob: "Gibrid ta'lim — bu onlayn va oflayn darslarni birlashtirgan o'qitish tizimi."
    },
    {
      savol: "Ingliz tili kurslariga necha yoshdan ariza topshirish mumkin?",
      javob: "7 yoshdan boshlab ariza topshirish mumkin."
    },
    {
      savol: "O'quvchilarni kerakli adabiyotlar bilan ta'minlaysizmi yoki alohida sotib olish kerakmi?",
      javob: "Barcha kerakli adabiyotlar o'quv markazi tomonidan ta'minlanadi."
    },
    {
      savol: "Ingliz tilini o'qitishning qanday metod va tizimlaridan foydalanasiz?",
      javob: "Biz Cambridge University Press'ning Prepare tizimidan foydalanamiz."
    },
    {
      savol: "Bepul xizmatlardan qanday foydalanish mumkin?",
      javob: "Birinchi darsga yozilish orqali bepul sinov darsidan foydalanishingiz mumkin."
    },
    {
      savol: "Kursni tanlashdan avval ingliz tilini bilish darajasini qanday aniqlash mumkin?",
      javob: "Bepul placement test orqali darajangizni aniqlay olasiz."
    },
    {
      savol: "Ingliz tilini noldan o'rganish uchun qancha vaqt talab qilinadi?",
      javob: "Noldan C1 darajasiga yetish uchun taxminan 2-3 yil kerak bo'ladi."
    },
    {
      savol: "Cashback nima va uni qanday olish mumkin?",
      javob: "Cashback — do'st taklif qilganingizda sizga beriladigan bonus. Shaxsiy kabinetdan kuzatishingiz mumkin."
    },
  ]

  return (
    <section className="w-full px-5 bg-white">
      <div className="max-w-3xl mx-auto py-12">

        <div className="text-center mb-10">
          <h1 className="text-[#050A41] text-5xl font-bold">FAQ</h1>
          <p className="text-[#8284A0] text-lg mt-2">Sizda tug'ulishi mumkin bo'lgan savollarga javob oling</p>
        </div>

        <div className="bg-[#F7F7F7] rounded-3xl px-6 py-2">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 last:border-none">
              <div
                className="flex items-center justify-between py-5 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <p className="text-[#050A41] font-medium text-base">{item.savol}</p>
                <div className="w-9 h-9 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                  <span className="text-white text-xl">{open === i ? "−" : "+"}</span>
                </div>
              </div>
              {open === i && (
                <p className="text-[#8284A0] text-sm pb-4">{item.javob}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}