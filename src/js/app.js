export default function showAttack(obj) {
  const { special } = obj;

  const result = special.map((elem) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    return {
      id, name, icon, description,
    };
  });

  return result;
}
