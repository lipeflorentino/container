export const generateTestId = (dataTestId: string) => ({
  component: dataTestId,
  menu: `${dataTestId}-menu`,
  button: `${dataTestId}-button`,
  item: (index: number) => `${dataTestId}-item-${index}`,
});
