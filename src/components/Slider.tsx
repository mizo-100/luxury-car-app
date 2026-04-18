import { useState, useEffect } from "react";
import { CAR_DATA } from "../data/cars";

const sliderCars = CAR_DATA.slice(0, 4);

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderCars.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      {sliderCars.map((car, index) => (
        <div
          key={car.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img 
            src={car.image} 
            alt={car.model} 
            className={`w-full h-full object-cover transition-transform duration-4000ms ease-out ${
              index === currentIndex ? "scale-100" : "scale-110"
            }`}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-16 md:px-32 text-white">
            <div className={`transition-all duration-1000 delay-300 transform ${
              index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <span className="text-[10px] tracking-[0.8em] uppercase font-bold text-amber-500 mb-6 block">
                Exclusive Collection
              </span>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-2">
                {car.make.toUpperCase()}
              </h1>
              <h2 className="text-4xl md:text-6xl font-extralight tracking-widest text-gray-300 mb-8">
                {car.model}
              </h2>
              
              <div className="flex items-center gap-6">
                <p className="text-2xl font-light tracking-[0.2em]">
                  <span className="text-xs mr-2 opacity-50">JPY</span>
                  {car.price.toLocaleString()}
                </p>
                <div className="h-1px w-20 bg-amber-500/50" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30">
        {sliderCars.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group flex items-center gap-4"
          >     
            <div className={`w-12 h-1px transition-all duration-500 ${
                index === currentIndex ? "bg-white w-16" : "bg-white/20"
              }`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
};