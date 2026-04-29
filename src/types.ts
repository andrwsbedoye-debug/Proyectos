export type SectionId = 
  | 'dashboard'
  | 'selection'
  | 'training'
  | 'manual'
  | 'wellbeing'
  | 'sst'
  | 'induction'
  | 'payroll';

export interface Section {
  id: SectionId;
  title: string;
  description: string;
  icon: string;
  color: string;
}
