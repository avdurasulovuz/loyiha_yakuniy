"use client";
import { useRef, useState } from "react";

function VideoCard({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="relative group overflow-hidden rounded-4xl cursor-pointer" onClick={toggle}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-4xl"
        muted
        playsInline
        preload="metadata"
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-4xl transition-opacity duration-300">
          <svg className="w-12 h-12 text-white" fill="white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function ApplicationCambridge() {
  return (
    <section className="w-full px-5 bg-white">
      <div className="max-w-8xl mx-auto py-24">
        <div className="grid grid-cols-8 gap-4 overflow-hidden rounded-4xl">

          <VideoCard src="https://app.cambridgeonline.uz/storage/site/tugad.mp4" />

          <div>
            <img src="https://app.cambridgeonline.uz/storage/site/3c96e15d-5a00-46fb-b933-adb3ddaf242c_main.jpg" alt="" className="overflow-hidden rounded-4xl" />
            <img src="https://app.cambridgeonline.uz/storage/site/6cdc7c28-155d-4c25-ab18-7a2d4287561a_main.jpg" alt="" className="overflow-hidden rounded-4xl mt-4" />
          </div>

          <VideoCard src="https://app.cambridgeonline.uz/storage/site/80965c00-cb33-4aca-a513-f3f40d78a24d_main.mp4" />

          <div>
            <img src="https://app.cambridgeonline.uz/storage/site/e9f23d74-18bf-4857-8310-dfc09f08c8a6_main.jpg" alt="" className="overflow-hidden rounded-4xl" />
            <img src="https://app.cambridgeonline.uz/storage/site/2c2230f0-9d8f-4bea-a810-468ad9f0efa2_main.jpg" alt="" className="overflow-hidden rounded-4xl mt-4" />
          </div>

          <VideoCard src="https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4" />

          <div>
            <img src="https://app.cambridgeonline.uz/storage/site/9654339a-3322-48fb-8dd8-aee9be805221_main.jpg" alt="" className="overflow-hidden rounded-4xl" />
            <img src="https://app.cambridgeonline.uz/storage/site/48db245f-0b5a-40f5-b563-d2e2e9aec389_main.jpg" alt="" className="overflow-hidden rounded-4xl mt-4" />
          </div>

          <VideoCard src="https://app.cambridgeonline.uz/storage/site/61c8fbc0-2a8b-4e3d-aa43-4cfde6f81ac5_main.mp4" />

          <div>
            <img src="https://app.cambridgeonline.uz/storage/site/cb378b76-bc44-464e-846b-eb33f6b440fa_main.jpg" alt="" className="overflow-hidden rounded-4xl" />
            <img src="https://app.cambridgeonline.uz/storage/site/da2da85e-90bc-4154-9fb1-237b59cbf977_main.jpg" alt="" className="overflow-hidden rounded-4xl mt-4" />
          </div>

        </div>
      </div>
    </section>
  )
}