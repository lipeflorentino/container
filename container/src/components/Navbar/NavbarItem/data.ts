export const generateTestId = (dataTestId: string) => ({
  component: dataTestId,
  badge: `${dataTestId}-badge`,
  icon: `${dataTestId}-icon`,
});
