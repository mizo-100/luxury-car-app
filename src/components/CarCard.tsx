import type { Car } from "../types/car";

export const CarCard = ( { make, model, year, price, image, category}: Car) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-3/2 overflow-hidden bg-gray-100">

            <img 
                src={image} 
                alt={model}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div className="adsolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-black">
                    {category}
                </span>
            </div>          
        </div>
        <div className="mt-6 space-y-2">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-400 font-semibold uppercase">{make}</p>
            <h3 className="text-xl font-light tracking-tight text-gray-900">{model}</h3>
          </div>
          <p className="text-sm font-medium text-gray-400">{year}</p>
        </div>
        
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <p className="text-lg font-light tracking-tighter">
            <span className="text-xs mr-1">¥</span>{price}
          </p>
          <span className="text-[10px] tracking-widest uppercase border-b border-black pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            View Details
          </span>
        </div>
      </div>
    </div>
    );
};