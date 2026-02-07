
import { Pet } from './types.ts';

const today = new Date();
const addDays = (days: number) => {
  const d = new Date();
  d.setDate(today.getDate() + days);
  return d.toISOString().split('T')[0];
};

export const INITIAL_PETS: Pet[] = [
  {
    id: '1',
    name: 'Cookie',
    ageMonths: 11,
    weightKg: 3.5,
    nextVaccinationDate: addDays(200),
    iconType: 'cat' as const,
  },
  {
    id: '2',
    name: 'Karas',
    ageMonths: 11,
    weightKg: 4.5,
    nextVaccinationDate: addDays(200),
    iconType: 'cat' as const,
  },
  {
    id: '3',
    name: 'Kiska',
    ageMonths: 25,
    weightKg: 2.5,
    nextVaccinationDate: addDays(300),
    iconType: 'cat' as const,
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const MAX_VACCINATION_CYCLE = 365;
