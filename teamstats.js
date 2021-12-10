const team = {
  _players : [
    {firstName: 'James', lastName: 'Tan', age: '13'}, 
    {firstName: 'Luke', lastName: 'Lim', age: '10'}, 
    {firstName: 'Steve', lastName: 'Wong', age: '12'}
  ],
  _games : [
    {opponent: 'Ravens', teamPoints: 20, opponentPoints: 5},
    {opponent: 'Lions', teamPoints: 5, opponentPoints: 17},
    {opponent: 'Tigers', teamPoints: 40, opponentPoints: 3},
  ],
  get player(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName, 
      lastName, 
      age
    };
    this._players.push(player);
  }, 
  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points : points,
      opponentPoints : oppPoints
    }
    this.games.push(game);
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//console.log(team.players);

team.addGame('Bears', 71, 80);
team.addGame('Cows', 99, 82);
team.addGame('Eagles', 110, 97);

console.log(team.games);
