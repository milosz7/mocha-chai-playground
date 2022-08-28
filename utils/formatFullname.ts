export const formatFullName = (fullName: string) => {
  const passedFullName = fullName.split(' ');
  const [firstName, lastName] = passedFullName;
  if (passedFullName.length !== 2) return 'Error';
  if (!firstName || !lastName) return 'Error';
  return (
    firstName.slice(0, 1).toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName.slice(0, 1).toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
