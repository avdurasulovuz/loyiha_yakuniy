import { createContext, useContext, useState } from "react"

const LangContext = createContext()

export const translations = {
  uz: {
    kurslar: "Kurslar", filiallar: "Filiallar", karyera: "Karyera",
    sertifikat: "Sertifikat", ommaviy: "Ommaviy oferta", kirish: "Kirish",
    hero: "Biz nafaqat ingliz tilini o'rgatamiz, balki insonlar hayotini o'zgartiramiz!",
    yozilish: "Birinchi darslarga yozilish"
  },
  ru: {
    kurslar: "Курсы", filiallar: "Филиалы", karyera: "Карьера",
    sertifikat: "Сертификат", ommaviy: "Публичная оферта", kirish: "Войти",
    hero: "Мы не просто учим английскому, мы меняем жизни людей!",
    yozilish: "Записаться на первый урок"
  },
  en: {
    kurslar: "Courses", filiallar: "Branches", karyera: "Career",
    sertifikat: "Certificate", ommaviy: "Public offer", kirish: "Login",
    hero: "We don't just teach English, we change people's lives!",
    yozilish: "Sign up for first lesson"
  },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "uz")

  const changeLang = (l) => {
    setLang(l)
    localStorage.setItem("lang", l)
  }

  return (
    <LangContext.Provider value={{ lang, changeLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)