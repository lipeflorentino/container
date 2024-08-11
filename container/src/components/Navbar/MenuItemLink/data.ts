export const generateTestId = (dataTestId: string) => ({
  modal: dataTestId,
  form: `${dataTestId}-form-control`,
});
