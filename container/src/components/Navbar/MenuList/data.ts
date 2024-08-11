export const generateTestId = (dataTestId: string) => ({
  component: dataTestId,
  categoryBlock: (key: number) => `${dataTestId}-category-block-${key}`,
  menuItemLink: (key: number) => `${dataTestId}-item-link-${key}`,
});
