import { useState } from "react";
import { Slider } from "./components/Slider";
import { Sidebar } from "./components/Sidebar";
import { ContactForm } from "./components/ContactForm";
import { Navbar } from "./components/Navbar";
import { CarCard } from "./components/CarCard";
import { CAR_DATA } from "./data/cars";
import { CarModal } from "./components/CarModal";
import type { Car } from "./types/car";

function App() {

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const [sidebarMode, setSidebarMode] = useState<"Collection" | "Experience">("Collection");

  const handleOpenModal = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  const filteredCars = filterCategory === "All"
    ? CAR_DATA
    : CAR_DATA.filter(car => car.category === filterCategory); 

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans">
      <header>
        <Navbar
          onContactClick={() => setIsContactOpen(true)}
          onCollectionClick={() => {
            setSidebarMode("Collection");
            setIsSidebarOpen(true);
          }}
          onExperienceClick={() => {
            setSidebarMode("Experience");
            setIsSidebarOpen(true);
          }}
        /> 
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeTab={sidebarMode}
          currentCategory={filterCategory}
          onCategorySelect={setFilterCategory}
          onContactClick={() => setIsContactOpen(true)}
        />
      </header>

      <Slider />
      
      {isContactOpen && (
        <ContactForm onClose={() => setIsContactOpen(false)} />
      )}

      <main className="max-w-7xl mx-auto py-20 px-8">

        <header className="mb-24">
          <h2 className="text-xs tracking-[0.6em] text-gray-400 uppercase mb-4">Current Inventory</h2>
          <h1 className="text-5xl font-light tracking-tighter leading-tight">
            厳選された、<br />至高のドライビング体験を。
          </h1>
          <p className="mt-4 text-amber-500 font-bold uppercase tracking-widest text-[10px]">
            Filtering by: {filterCategory}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredCars.map((car) => (
            <div key={car.id} onClick={() => handleOpenModal(car)} className="cursor-pointer">
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