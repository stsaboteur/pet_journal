
export interface Pet {
  id: string;
  name: string;
  ageMonths: number;
  weightKg: number;
  daysToVaccination: number;
  iconType: 'cat' | 'dog'; // In this case mostly cats as per requirement
}
