
import React from 'react';
import { MoreVertical, Plus } from 'lucide-react';
import { PETS_DATA } from './constants.tsx';
import { PetCard } from './components/PetCard.tsx';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-black/80 px-6 backdrop-blur-md">
        <h1 className="font-mono text-lg font-medium tracking-widest text-gray-400">
          PET JOURNAL
        </h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 active:scale-95">
          <MoreVertical size={20} />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-5 pt-20 pb-28">
        <div className="mx-auto max-w-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white">My Pets</h2>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10">
              {PETS_DATA.length} Total
            </span>
          </div>

          {/* Pet Cards List */}
          <div className="flex flex-col gap-4">
            {PETS_DATA.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>

          {/* Empty state placeholder / call to action */}
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/5 py-10 px-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-500">
              <Plus size={24} />
            </div>
            <p className="text-sm font-medium text-gray-500">Add another observation</p>
          </div>
        </div>
      </main>

      {/* Floating Action Button (Mobile Friendly) */}
      <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <button className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] text-white shadow-2xl shadow-blue-500/20 ring-2 ring-white/10 transition-transform active:scale-90">
          <Plus size={28} />
        </button>
      </div>

      {/* Bottom Navigation Mockup for Native Feel */}
      <nav className="fixed bottom-0 z-30 flex h-16 w-full items-center justify-around bg-black/80 px-4 backdrop-blur-md border-t border-white/5">
        <div className="flex flex-col items-center gap-1 text-white">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mb-0.5"></div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-500">
           <div className="h-1.5 w-1.5 rounded-full bg-transparent mb-0.5"></div>
           <span className="text-[10px] font-bold uppercase tracking-wider">History</span>
        </div>
        <div className="w-14"></div> {/* Spacer for FAB */}
        <div className="flex flex-col items-center gap-1 text-gray-500">
           <div className="h-1.5 w-1.5 rounded-full bg-transparent mb-0.5"></div>
           <span className="text-[10px] font-bold uppercase tracking-wider">Health</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-500">
           <div className="h-1.5 w-1.5 rounded-full bg-transparent mb-0.5"></div>
           <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default App;
