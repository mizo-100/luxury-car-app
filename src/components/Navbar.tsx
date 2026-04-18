interface NavbarProps {
  onContactClick: () => void;
  onCollectionClick: () => void;
  onExperienceClick: () => void;
}

export const Navbar = ({ onContactClick, onCollectionClick, onExperienceClick }: NavbarProps) => {
  return (
    <nav className="h-20 flex items-center justify-between px-10 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="text-xl tracking-[0.4em] font-light text-black">
        EXOTIC <span className="font-bold">DRIVE</span>
      </div>
      <div className="space-x-12 text-[10px] tracking-[0.2em] uppercase font-medium text-black">
        <button 
          onClick={onCollectionClick}
          className="hover:text-gray-400 transition cursor-pointer"
        >
          Collection       
        </button>
        
        <button
          onClick={onContactClick}
          className="hover:text-gray-400 transition cursor-pointer"
        >
          Contact
        </button>

        <button
          onClick={onExperienceClick}
          className="hover:text-gray-400 transition cursor-pointer"
        >
          EXPERIENCE
        </button>
      </div>
    </nav>
  );
};