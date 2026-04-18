import type { Car } from "../types/car";

interface Props {
    car: Car;
    onClose: () => void;
};

export const CarModal = ({ car, onClose }: Props) => {
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500"
                onClick={onClose}
            />

            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 text-gray-400 hover:text-black transition-colors duration-300 p-2"
                >
                    <span className="text-xs tracking-widest uppercase font-light">Close ✕</span>
                </button>

                <div className="md:w-3/5 relative bg-gray-100 overflow-hidden">
                <img 
                    src={car.image} 
                    alt={car.model} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>

                <div className="md:w-2/5 p-10 md:p-14 flex flex-col bg-white">
                    <div className="grow">
                        <span className="text-[10px] tracking-[0.5em] text-amber-700 font-bold uppercase mb-4 block">
                        {car.make}
                        </span>
                        <h2 className="text-4xl font-extralight tracking-tighter text-slate-900 mb-2">
                        {car.model}
                        </h2>
                        <p className="text-gray-400 text-sm mb-8">{car.year} Model</p>
                        <div className="space-y-5 border-y border-gray-100 py-8">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">Category</span>
                                <span className="text-sm font-light">{car.category}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">Status</span>
                                <span className="text-sm font-light text-green-700">In Stock</span>
                            </div>

                            <div className="flex justify-between items-end">
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">Price</span>
                                <span className="text-2xl font-extralight tracking-tighter">
                                <span className="text-xs mr-1">¥</span>{car.price}
                                </span>
                            </div>
                        </div>

                        <p className="mt-8 text-gray-500 text-sm leading-relaxed font-light">
                        最高峰のパフォーマンスと、妥協のないクラフトマンシップ。
                        この一台が、あなたのガレージに新たな物語を刻みます。
                        </p>
                    </div>

                    <button className="mt-12 w-full bg-[#1a1a1a] text-white py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-amber-800 transition-colors duration-500">
                        Inquire Now
                    </button>
                </div>
            </div>
        </div>
    )
}