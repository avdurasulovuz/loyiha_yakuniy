"use client";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full h-screen flex">

      {/* Chap qism - Login forma */}
      <div className="w-full lg:w-[420px] flex flex-col justify-center px-10 py-10 bg-white">

        <div className="flex items-center gap-2 mb-10">
          <img src="logo.png" alt="Cambridge LC" className="w-12 h-12" />
          <div>
            <h2 className="text-xl font-bold text-[#1a1a4b] leading-none">
              CAMBRIDGE
            </h2>
            <p className="text-[10px] text-gray-500 tracking-widest">
              LEARNING CENTER
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#1a1a4b] leading-tight mb-3">
          Welcome <br /> to Cambridge LC
        </h1>
        <p className="text-gray-500 mb-8">Please log in to your account</p>

        <div className="mb-5">
          <label className="block text-gray-600 mb-2">Phone Number</label>
          <input
            type="text"
            className="w-full h-12 bg-gray-100 rounded-lg px-4 outline-none"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-600 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-12 bg-gray-100 rounded-lg px-4 pr-12 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              👁
            </button>
          </div>
        </div>

        <button className="w-full h-14 bg-[#0ea5ff] hover:bg-[#0b93e6] transition text-white font-semibold rounded-xl">
          Login
        </button>
      </div>

      {/* O'ng qism - Suratlar galereyasi (masonry) */}
      <div className="hidden lg:block flex-1 bg-white overflow-y-auto">
        <div className="columns-3 gap-3 p-3">
          <img src="photo1.jpg" className="w-full mb-3 rounded-xl break-inside-avoid" />
          <img src="photo2.jpg" className="w-full mb-3 rounded-xl break-inside-avoid" />
          <img src="photo3.jpg" className="w-full mb-3 rounded-xl break-inside-avoid" />
          <img src="photo4.jpg" className="w-full mb-3 rounded-xl break-inside-avoid" />
          <img src="photo5.jpg" className="w-full mb-3 rounded-xl break-inside-avoid" />
          <img src="photo6.jpg" className="w-full mb-3 rounded-xl break-inside-avoid" />
        </div>
      </div>

    </section>
  );
}