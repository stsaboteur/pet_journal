
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, X } from 'lucide-react';
import { Pet } from '../types.ts';

interface UpdateModalProps {
  pet: Pet;
  onClose: () => void;
  onUpdate: (id: string, weight: number, date: string) => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ pet, onClose, onUpdate }) => {
  const [weight, setWeight] = useState(pet.weightKg.toString());
  const [date, setDate] = useState(pet.nextVaccinationDate);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const isModified = parseFloat(weight) !== pet.weightKg || date !== pet.nextVaccinationDate;
  const isValid = parseFloat(weight) > 0 && date !== '';

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid && isModified) {
      onUpdate(pet.id, parseFloat(weight), date);
      handleClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className={`relative w-full max-w-lg overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1a1a1a] to-[#262626] p-10 shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ${isClosing ? 'scale-95' : 'scale-100'}`}
      >
        <button 
          onClick={handleClose}
          className="absolute right-8 top-8 text-gray-500 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white">
          Update data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Weight Field */}
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              Weight
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 4.5 kg"
                autoFocus
                className="w-full rounded-2xl bg-[#2a2a2a] p-4 text-lg font-medium text-white outline-none ring-2 ring-transparent transition-all focus:ring-purple-500/50"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">kg</span>
            </div>
          </div>

          {/* Date Field */}
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              Vaccination Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full appearance-none rounded-2xl bg-[#2a2a2a] p-4 text-lg font-medium text-white outline-none ring-2 ring-transparent transition-all focus:ring-purple-500/50 [color-scheme:dark]"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" size={20} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-2xl border border-white/10 p-4 font-bold text-white transition-colors hover:bg-white/5 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isModified || !isValid}
              className={`flex-1 rounded-2xl p-4 font-bold transition-all active:scale-95 ${
                isModified && isValid
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
