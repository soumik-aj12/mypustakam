const Hero = () => {
  return (
    <section className="py-stack-lg flex flex-col items-center">
      <div className="w-full bg-surface-container-low rounded-xl overflow-hidden shadow-[0_30px_30px_-10px_rgba(74,66,56,0.08)] flex flex-col md:flex-row items-center md:items-stretch min-h-125">
        <div className="w-full md:w-1/2 p-stack-md md:p-stack-lg flex flex-col justify-center text-center md:text-left">
          <span className="text-label-sm font-label-sm text-primary-container tracking-widest mb-4">
            BOOK OF THE MONTH
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-background mb-stack-sm leading-tight">
            The Alchemist's Daughter
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md max-w-lg">
            A lyrical exploration of science, magic, and the human spirit in the
            heart of 18th-century Venice. An unforgettable journey through
            shadows and gold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <button className="bg-primary-container text-on-secondary px-8 py-3 rounded-lg font-label-md text-label-md font-bold shadow-md hover:brightness-110 transition-all">
              Buy Now — $24.00
            </button>
            <button className="border border-secondary-container text-primary px-8 py-3 rounded-lg font-label-md text-label-md font-medium hover:bg-secondary-container/10 transition-all">
              Preview Chapter
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-surface-container-high relative overflow-hidden flex items-center justify-center p-stack-lg">
          <div className="relative z-10 w-64 md:w-80 aspect-2/3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 duration-500">
            <img
              alt="The Alchemist's Daughter Book Cover"
              className="w-full h-full object-cover"
              data-alt="A highly aesthetic and minimalist book cover design titled 'The Alchemist's Daughter'. The cover features a single, intricate gold-foiled sunburst emblem centered on a deep, textured navy blue background. The lighting is soft and directional, highlighting the metallic sheen and the subtle paper texture. The overall mood is sophisticated, scholarly, and mysterious, fitting a high-end boutique bookstore environment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfTxMz8P4bEirhv7tI4JTBvIvnbT_dQFxyIDz-KAIa_hnEdZ8TRCBXFTcj-nzJ2Hytp4ahP4IV6K2XiKjPjYab6uaRZzpbpz0p74OlvM3QKYT2MH54qZVJaeMBjISy4MMGct1TwULmQOgQ1t9RSt8BxPs6UU27tB5Pt2gEXv1_mVQk7W86_85HI3w5E2DI5UVrBX5iTMHfOnyvPERH_ejMWQ27zItE4d_bXFsK7O4-s8QhjSomzjIeNCCsVNd-GfKioii6M7V19kO9"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-tr from-surface-container-high/60 via-transparent to-primary-container/10" />
        </div>
      </div>
    </section>
  )
}

export default Hero