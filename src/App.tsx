import { useState } from "react";
import { Slider } from "./components/Slider";
import { CarCard } from "./components/CarCard";
import { CAR_DATA } from "./data/cars";
import type { Car } from "./types/car";
import { CarModal } from "./components/CarModal";

function App() {

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleOpenModal = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans">
      
      <nav className="h-20 flex items-center justify-between px-10 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl tracking-[0.4em] font-light">EXOTIC <span className="font-bold">DRIVE</span></div>
        <div className="space-x-12 text-[10px] tracking-[0.2em] uppercase font-medium">
          <a href="#" className="hover:text-gray-400 transition">Inventory</a>
          <a href="#" className="hover:text-gray-400 transition">Sell Your Car</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </nav>

      <Slider />

      {/* 在庫一覧 */}
      <main className="max-w-7xl mx-auto py-20 px-8">
        {/*ヘッダー*/}
        <header className="mb-24">
          <h2 className="text-xs tracking-[0.6em] text-gray-400 uppercase mb-4">Current Inventory</h2>
          <h1 className="text-5xl font-light tracking-tighter leading-tight">
            厳選された、<br />至高のドライビング体験を。
          </h1>
        </header>

        {/* 車一覧（グリッド表示） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {CAR_DATA.map((car) => (
            <div key={car.id} onClick={() => handleOpenModal(car)}>
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </main>

      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={handleCloseModal}
        />
      )}

      {/* フッター */}
      <footer className="bg-black text-white py-20 px-12 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase opacity-50">Luxury Pre-owned Dealer</p>
          <p className="mt-4 font-light text-sm opacity-30">© 2026 EXOTIC DRIVE. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;