
import React from 'react';
import { Pet } from '../types.ts';
import { CircularProgress } from './CircularProgress.tsx';
import { MAX_VACCINATION_CYCLE } from '../constants.tsx';
import { Cat } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
}

export const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-4 shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Block - Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
          <Cat size={28} />
        </div>

        {/* Center Block - Info */}
        <div className="flex flex-1 flex-col justify-center min-w-0">
          <h3 className="truncate text-xl font-bold text-white tracking-tight">
            {pet.name}
          </h3>
          <p className="text-sm font-medium text-gray-400">
            {pet.ageMonths} months
          </p>
        </div>

        {/* Middle Block - Weight */}
        <div className="flex flex-col items-center justify-center px-2">
          <span className="text-sm font-semibold text-gray-300 whitespace-nowrap">
            {pet.weightKg.toFixed(1)} kg
          </span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Weight</span>
        </div>

        {/* Right Block - Vaccination Countdown */}
        <div className="shrink-0 pl-2">
          <CircularProgress 
            id={`progress-${pet.id}`} 
            value={pet.daysToVaccination} 
            maxValue={MAX_VACCINATION_CYCLE} 
          />
        </div>
      </div>
    </div>
  );
};
