const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function showSpecialAttack(char) {
  const { special } = char;

  const resultArr = special.map((item) => {
    const {
      id = 'no id', name = 'no name', icon = 'no icon', description = 'Описание недоступно',
    } = item;
    const specialAttack = {
      id, name, icon, description,
    };
    return specialAttack;
  });

  return resultArr;
}

console.log(showSpecialAttack(character));
