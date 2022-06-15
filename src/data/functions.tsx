export const createId = (fName: string, lName: string) => {
  const firstLetter = fName.slice(0, 1);

  return firstLetter + lName;
};
