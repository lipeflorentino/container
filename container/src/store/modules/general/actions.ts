import { action } from 'typesafe-actions';
import { GENERAL_TYPES } from './types';

export const populateFields = () => action(GENERAL_TYPES.POPULATE_FIELDS);
