export const getInitials = (name = '') => {
  const nameParts = name.split(' ');
  const firstLetterFirstName = nameParts[0].slice(0, 1);
  const firstLetterLastName = nameParts[nameParts.length - 1].slice(0, 1);

  return `${firstLetterFirstName}${firstLetterLastName}`;
};
