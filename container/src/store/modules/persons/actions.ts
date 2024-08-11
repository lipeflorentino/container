import { action } from 'typesafe-actions';
import { PersonTypes, Person } from './types';

export const getPersons = () => action(PersonTypes.PERSONS_REQUEST);

export const getPersonsSuccess = (data: Person[]) =>
  action(PersonTypes.PERSONS_SUCCESS, data);
