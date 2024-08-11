export enum TOKEN {
  USER_TOKEN = 'userToken',
}

export const getToken = () => {
  return sessionStorage.getItem(TOKEN.USER_TOKEN) || '';
};
