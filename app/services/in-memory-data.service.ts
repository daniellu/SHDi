export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];

    let weights = [
      {dateTime: 1466678695666, value: 76.5 },
      {dateTime: 1466778695666, value: 77.5 },
      {dateTime: 1467678694666, value: 75.4 },
      {dateTime: 1467778695666, value: 74.5 }
    ];
    return {heroes, weights};
  }
}
