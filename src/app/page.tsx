import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#D7ECFA] flex flex-col items-center justify-center relative">
      {/* Logo Section */}
      <div className="w-full max-w-[800px] px-4">
        <Image
          src="/brand_assets/Word Mark/White (Primary)/MP_Wordmark_Primary.png"
          alt="Masterpet Wordmark"
          width={800}
          height={200}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <div className="w-6 h-6 border-b-2 border-r-2 border-[#00008D] rotate-45"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-[#00008D] rotate-45 -mt-3"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-[#00008D] rotate-45 -mt-3"></div>
        </div>
      </div>
    </main>
  )
}
