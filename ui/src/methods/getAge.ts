export const getAge = (birthDate: Date | string): number => {
  const birthDateObj = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birthDateObj.getFullYear();

  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }

  return age;
};
