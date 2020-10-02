/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export default function orderByProps(obj, args) {
  const result = [];

  for (const key in obj) {
    result.push({ key, value: obj[key] });
  }

  result.sort((a, b) => {
    const iA = args.indexOf(a.key) + 1;
    const iB = args.indexOf(b.key) + 1;

    if (iA && iB) {
      return iA - iB;
    }

    if (iA) {
      return -1;
    }

    if (iB) {
      return 1;
    }

    return a.key.localeCompare(b.key);
  });

  return result;
}
