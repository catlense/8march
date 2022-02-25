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
  },
  albina: {
    name: {
      i: 'Альбина',
      r: 'Альбины',
      p: 'Альбине',
      o: 'Альбин',
      w: 'Альбиной'
    },
    team: 'albinaKatya'
  },
  katyak: {
    name: {
      i: 'Катя',
      r: 'Кати',
      p: 'Кате',
      o: 'Кать',
      w: 'Катей'
    },
    team: 'albinaKatya'
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
  },
  albinaKatya: {
    name: 'Команда Альбины и Кати К.',
    users: ['albina', 'katyak'],
    tasks: [
      {
        number: 1,
        text: 'Кто тут?',
        answer: 'я',
        back: 'Идите к охране',
        next: 'Идите вон'
      },
      {
        number: 2,
        text: 'Кто там?',
        answer: 'свои',
        back: 'Идите к охране',
        next: 'Идите вон'
      }
    ]
  }
}