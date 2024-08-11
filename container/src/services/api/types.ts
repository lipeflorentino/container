import { Response } from 'services/utils/tryCatchRequest';

export type ResponseAPI<T> = Promise<Response<T>>;

export type ResponseDefault = ResponseAPI<null>;
