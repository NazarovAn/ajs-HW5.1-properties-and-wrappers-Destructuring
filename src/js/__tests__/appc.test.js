import showSpecialAttack from '../app';

test('showSpecialAttack - description hidden', () => {
  const character = {
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
      },
    ],
  };
  const received = showSpecialAttack(character);
  expect(received).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  }]);
});

test('showSpecialAttack - empty attack', () => {
  const character = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {},
    ],
  };
  const received = showSpecialAttack(character);
  expect(received).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 'no id',
    name: 'no name',
    icon: 'no icon',
    description: 'Описание недоступно',
  }]);
});

test('showSpecialAttack - one attack', () => {
  const character = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ],
  };
  const received = showSpecialAttack(character);
  expect(received).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'no icon',
    description: 'Двойной выстрел наносит двойной урон',
  }]);
});
