export function HeroIntroCard() {
  return (
    <div className="max-w-md mt-6 sm:mt-10 bg-[#0b0d12]/40 backdrop-blur-sm p-6 sm:p-8 border border-white/10 rounded-none shadow-2xl">
      <p className="text-sm sm:text-base leading-relaxed text-slate-200 tracking-wide font-light mb-8">
        Precision engineering, refined materials, and timeless design crafted into a watch made to move through life with you.
      </p>

      <a
        href="#collection"
        className="inline-block border border-white/40 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
      >
        Discover the Collection
      </a>
    </div>
  );
}
