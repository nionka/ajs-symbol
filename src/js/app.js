/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function showAttack(obj) {
  const { special } = obj;

  special.forEach((elem) => {
    if (!elem.hasOwnProperty('description')) {
      elem.description = 'Описание недоступно';
    }
  });

  return special;
}
