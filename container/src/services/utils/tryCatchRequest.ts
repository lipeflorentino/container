export type Response<T> = {
  response: {
    data: {
      data: T;
    };
  };
  error?: {
    status: number;
    data: unknown;
    message: string;
    name: string;
  };
};

const tryCatchFn = (): any => async (fnTry: any) => {
  try {
    const response = await fnTry();

    return { response };
  } catch (err) {
    const { message, name, response } = err;

    const error = {
      message,
      name,
      status: response?.status,
      data: response?.data,
    };

    return { error };
  }
};

export const tryCatchRequest = tryCatchFn();
