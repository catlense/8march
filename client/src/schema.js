export const users = {
  lera: {
    name: {
      i: 'Лера',
      r: 'Леры',
      p: 'Лере',
      o: 'Лер',
      w: 'Лерой'
    },
    team: 'leraLiza'
  },
  liza: {
    name: {
      i: 'Лиза',
      r: 'Лизы',
      p: 'Лизе',
      o: 'Лиз',
      w: 'Лизой'
    },
    team: 'leraLiza'
  }
}

export const teams = {
  leraLiza: {
    name: 'Команда Леры и Лизы',
    users: ['lera', 'liza'],
    tasks: [
      {
        number: 1,
        text: 'А и б сидели на трубе, а упала, б пропала, кто остался на трубе?',
        answer: 'и',
        back: 'Подойдите к охраннице',
        next: 'Идите к кабинету №27.'
      },
      {
        number: 2,
        text: 'А и б сидели на трубе, а упала, б пропала, кто остался на трубе?',
        answer: 'и',
        back: 'Подойдите к охраннице',
        next: 'Идите к кабинету №27.'
      }
    ]
  }
}