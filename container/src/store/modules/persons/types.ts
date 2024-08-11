export enum PersonTypes {
  PERSONS_REQUEST = '@persons/PERSONS_REQUEST',
  PERSONS_SUCCESS = '@persons/PERSONS_SUCCESS',
}

export interface Person {
  value: string;
  label: string;
}

export interface PersonsState {
  readonly data: Person[];
}
