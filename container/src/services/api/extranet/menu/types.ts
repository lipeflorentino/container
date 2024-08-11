import { ResponseAPI } from 'services/api/types';

export interface MenuItem {
  id: number;
  isMicroFrontend: boolean;
  isExternalSystem: boolean;
  link: string;
  name: string;
  fields: number[];
}

export interface Menu {
  id: number;
  name: string;
  items: MenuItem[];
}

export type MenuResponse = ResponseAPI<Menu[]>;
