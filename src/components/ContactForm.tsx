import React, { useState } from "react";

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6 overflow-y-auto">     
      <div className="relative w-full max-w-4xl bg-zinc-900 p-8 md:p-16 border border-zinc-800 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-2xl cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-[10px] tracking-[0.5em] uppercase font-bold">Inquiry</span>
              <h2 className="text-4xl font-extralight tracking-[0.2em] mt-4 text-white">CONTACT US</h2>
              <div className="h-1px w-12 bg-amber-500/50 mx-auto mt-6" />
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-2 text-white">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Name</label>
                <input 
                  required
                  type="text" 
                  className="bg-transparent border-b border-zinc-700 py-2 focus:border-amber-500 outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-2 text-white">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="bg-transparent border-b border-zinc-700 py-2 focus:border-amber-500 outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2 text-white">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="bg-transparent border-b border-zinc-700 py-2 focus:border-amber-500 outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="md:col-span-2 text-center mt-8">
                <button 
                  type="submit"
                  className="px-12 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-20 text-center text-white">
            <h3 className="text-3xl font-light tracking-widest mb-4">THANK YOU</h3>
            <p className="text-zinc-400">メッセージを承りました。コンシェルジュからの連絡をお待ちください。</p>
            <button 
              onClick={onClose}
              className="mt-8 text-xs tracking-widest border-b border-white pb-1 uppercase cursor-pointer hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};