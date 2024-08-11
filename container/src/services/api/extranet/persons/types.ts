import { ResponseAPI } from 'services/api/types';

export interface Person {
  personId: number;
  name: string;
}

export type PersonResponse = ResponseAPI<Person>;
