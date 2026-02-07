
import { Pet } from './types';

// Explicitly type the array elements to match the Pet interface, using 'as const' for literal types
export const PETS_DATA: Pet[] = ([
  {
    id: '1',
    name: 'Cookie',
    ageMonths: 11,
    weightKg: 3.5,
    daysToVaccination: 200,
    iconType: 'cat' as const,
  },
  {
    id: '2',
    name: 'Karas',
    ageMonths: 11,
    weightKg: 4.5,
    daysToVaccination: 200,
    iconType: 'cat' as const,
  },
  {
    id: '3',
    name: 'Kiska',
    ageMonths: 25,
    weightKg: 2.5,
    daysToVaccination: 300,
    iconType: 'cat' as const,
  },
] as Pet[]).sort((a, b) => a.name.localeCompare(b.name));

export const MAX_VACCINATION_CYCLE = 365; // Assuming a standard year cycle for percentage calculation
