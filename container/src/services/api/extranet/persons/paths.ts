const BASE_URL = '/persons';

export default {
  persons: {
    default: BASE_URL,
  },
  firstAccess: {
    default: `${BASE_URL}/setFirstAccess`,
  },
  brands: {
    default: `${BASE_URL}/brands`,
  },
};
