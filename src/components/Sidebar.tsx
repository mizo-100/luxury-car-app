interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "Collection" | "Experience";
  currentCategory: string;
  onCategorySelect: (category: string) => void;
  onContactClick: () => void;
}

export const Sidebar = ({ 
  isOpen, 
  onClose, 
  activeTab,
  currentCategory,
  onCategorySelect,
  onContactClick 
}: SidebarProps) => {
  
  const categories = ["All", "Coupe", "Supercar", "Luxury SUV", "SUV", "Electric"];

  if (!isOpen) return null;
  
 return (
    <div className="fixed inset-0 z-99999 flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <aside className="relative w-350 h-full bg-zinc-900 p-12 shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <button onClick={onClose} className="self-end text-zinc-500 hover:text-white text-3xl cursor-pointer p-2">✕</button>

        <div className="mt-8 flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === "Collection" && (
            <section className="animate-in fade-in duration-700">
              <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-8">Collection</p>
              <div className="flex flex-col space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onCategorySelect(cat);
                      onClose();
                      document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-left text-xl font-extralight tracking-widest cursor-pointer transition-all ${
                      currentCategory === cat ? "text-amber-500 ml-4" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>
          )}

          {activeTab === "Experience" && (
            <section className="animate-in fade-in duration-700">
              <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-8">Sell Your Car</p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-light tracking-widest mb-4 text-sm uppercase">Professional Appraisal</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light">
                    現役整備士の確かな眼で、あなたの愛車が積み重ねてきた価値を正当に評価します。
                    ボディーの塗装状態からエンジン音の僅かな変化まで、
                    数値化できない「本当のコンディション」を査定額に反映します。
                  </p>
                </div>
                
                <div className="p-6 border border-zinc-800 bg-zinc-950/50 rounded-sm">
                  <p className="text-amber-500 text-[10px] tracking-widest uppercase mb-2">Our Quality</p>
                  <p className="text-zinc-300 text-xs font-light italic">
                    "We don't just buy cars, we preserve their legacy."
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
        
        <div className="pt-12 border-t border-zinc-800">
          <button 
            onClick={() => { onClose(); onContactClick(); }}
            className="w-full py-4 border border-zinc-700 text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            {activeTab === "Experience" ? "Get a Quote" : "Send Inquiry"}
          </button>
        </div>
      </aside>
    </div>
  );
};