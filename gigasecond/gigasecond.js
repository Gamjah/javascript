//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (timestamp) => {
  const date = new Date(timestamp);
  const giga = 60_000_000_000;
  const newDate = new Date(date.getTime() + (giga * 1000))
  return newDate;
};
