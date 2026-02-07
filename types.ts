
export interface Pet {
  id: string;
  name: string;
  ageMonths: number;
  weightKg: number;
  nextVaccinationDate: string; // ISO string for calculations
  iconType: 'cat' | 'dog';
}
