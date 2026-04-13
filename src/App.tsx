import polaroid from "./assets/polaroid.jpg";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-(--bg-dark) text-(--text) font-sans">
      
      <section className="min-h-[80vh] flex justify-center items-center p-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-5xl w-full">
          
          <div className="relative group cursor-pointer shrink-0">
            <div className="bg-white p-4 pb-16 shadow-xl rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105 border border-gray-200">
              <div className="w-48 h-64 bg-(--border-muted) overflow-hidden flex justify-center items-center">
                <span className="text-(--text-muted) text-sm font-mono">
                  <img src={polaroid} alt="picture of me!" className="object-cover w-full h-full" />
                </span>
              </div>
            </div>
          </div>

          <div className="bg-(--bg-light) border border-(--border) rounded-3xl p-8 md:p-10 shadow-sm max-w-lg">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-(--primary)">
              hello, i'm jules!
            </h1>
            <p className="text-(--text) leading-relaxed text-lg mb-6">
              i'm a fullstack developer that specializes in ui/ux work and i try to make things look pretty. 
            </p>
            <p className="text-(--text) leading-relaxed text-lg mb-6">
              outside of stem, i enjoy tinkering with hardware and creating things in my life i feel passionate about in hopes they resonate with other people :)
            </p>
            <div className="flex gap-4">
              <button 
                className="px-6 py-2 bg-(--primary) text-(--highlight) rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer" 
                onClick={() => window.open('https://www.linkedin.com/in/jules-elvin-andrade/')}
              >
                linkedin
              </button>
              <button 
                className="px-6 py-2 bg-(--primary) text-(--highlight) rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer" 
                onClick={() => window.open('https://drive.google.com/file/d/19tBB9VPOimNwrNM41PmvtPQj0YHBJIDS/view?usp=sharing')}
              >
                resume
              </button>
              <button 
                className="px-6 py-2 bg-(--primary) text-(--highlight) rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer" 
                onClick={() => window.open('https://github.com/julesiet')}
              >
                github
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          <div className="md:col-span-2 bg-(--bg) border border-(--border) rounded-3xl p-8 flex flex-col justify-between hover:border-(--primary) transition-colors group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-(--success) animate-pulse" />
                <h3 className="font-mono text-sm text-(--text-muted) uppercase tracking-wider">
                  Currently Working On
                </h3>
              </div>
              <h4 className="text-2xl font-bold mb-2">CSULB SASE Website</h4>
              <p className="text-(--text-muted) line-clamp-3">
                Refactoring the SASE website to look more professional and adding a blog onto it!
              </p>
            </div>
            <div 
              className="text-(--primary) font-medium group-hover:translate-x-2 transition-transform w-fit cursor-pointer" 
              onClick={() => window.open('https://github.com/lb-sase/lb-sase.github.io')}
            >
              View Project →
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-2 bg-(--bg-light) border border-(--border) rounded-3xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
            <div className="mt-8 flex flex-col gap-6">
              <div className="bg-white p-2 pb-8 shadow-md rotate-[4deg] w-32 h-36">
                <div className="w-full h-full bg-(--bg-dark)" />
              </div>
              <div className="bg-white p-2 pb-8 shadow-md rotate-[-6deg] w-32 h-36 -mt-12 ml-8">
                <div className="w-full h-full bg-(--border-muted)" />
              </div>
            </div>
          </div>

          <a href="#" className="md:col-span-2 bg-(--primary) rounded-3xl p-8 flex flex-col justify-center text-(--highlight) hover:opacity-90 transition-opacity relative overflow-hidden group cursor-pointer">
            <h3 className="text-3xl font-bold mb-2 relative z-10 font-signature">
              handle with care.
            </h3>
            <p className="opacity-80 relative z-10 max-w-sm">
              a deeper dive into my personal thoughts told through streams of consciousness and more than necessary verbage
            </p>
            
            <div className="absolute right-8 bottom-8 text-(--highlight) opacity-50 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>

        </div>
      </section>
      
    </main>
  );
};

export default App;