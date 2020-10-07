import Team from '../Team';

test('check class Team', () => {
  function checkTeam() {
    const team = new Team();
    const undead = {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    };
    const mag = {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    };

    team.add(undead);
    team.add(mag);

    return team.toArray();
  }

  const expected = [
    {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    },
    {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    },
  ];

  expect(checkTeam()).toEqual(expected);
});

test('check class Team', () => {
  function checkTeam() {
    const team = new Team();
    const undead = {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    };
    const mag = {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    };

    team.addAll(undead, mag);

    return team.toArray();
  }

  const expected = [
    {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    },
    {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    },
  ];

  expect(checkTeam()).toEqual(expected);
});

test('check class Team', () => {
  function checkTeam() {
    const team = new Team();
    const undead = {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    };
    const mag = {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    };

    team.addAll(undead, mag, undead);

    return team.toArray();
  }

  const expected = [
    {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    },
    {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    },
  ];

  expect(checkTeam()).toEqual(expected);
});

test('check class Team', () => {
  function checkTeam() {
    const team = new Team();
    const undead = {
      name: 'Oleg', type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
    };
    const mag = {
      name: 'Irina', type: 'Mag', level: 1, health: 100, attack: 40, defence: 10,
    };

    team.add(undead);
    team.add(mag);
    team.add(undead);
  }

  expect(checkTeam).toThrowError(new Error('Такой персонаж уже есть в команде'));
});
