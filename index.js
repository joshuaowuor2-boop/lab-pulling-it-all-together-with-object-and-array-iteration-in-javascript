// NBA Game Stats Tracker

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 4, blocks: 1, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismack Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 3, blocks: 6, slamDunks: 12 }
      }
    }
  };
}

// Helper: merge all players into one object
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// -------------------------------
// 3.1 Retrieve Player Information
// -------------------------------
function numPointsScored(playerName) {
  return allPlayers()[playerName].points;
}

function shoeSize(playerName) {
  return allPlayers()[playerName].shoe;
}

// -------------------------------
// 3.2 Retrieve Team Information
// -------------------------------
function teamColors(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return game[side].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// -------------------------------
// 3.3 Player Numbers and Stats
// -------------------------------
function playerNumbers(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return Object.values(game[side].players).map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  return allPlayers()[playerName];
}

// -------------------------------
// 3.4 Advanced Challenges
// -------------------------------
function bigShoeRebounds() {
  let players = allPlayers();
  let biggest = null;

  for (let player in players) {
    if (!biggest || players[player].shoe > players[biggest].shoe) {
      biggest = player;
    }
  }
  return players[biggest].rebounds;
}

function mostPointsScored() {
  let players = allPlayers();
  let topScorer = null;

  for (let player in players) {
    if (!topScorer || players[player].points > players[topScorer].points) {
      topScorer = player;
    }
  }
  return topScorer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = Object.values(game.home.players).reduce((sum, p) => sum + p.points, 0);
  let awayPoints = Object.values(game.away.players).reduce((sum, p) => sum + p.points, 0);

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  let players = Object.keys(allPlayers());
  return players.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

function doesLongNameStealATon() {
  let players = allPlayers();
  let longest = playerWithLongestName();

  let mostStealsPlayer = Object.keys(players).reduce((max, current) =>
    players[current].steals > players[max].steals ? current : max
  );

  return longest === mostStealsPlayer;
}

module.exports = {
  gameObject, numPointsScored, shoeSize, teamColors, teamNames,
  playerNumbers, playerStats, bigShoeRebounds,
  mostPointsScored, winningTeam, playerWithLongestName, doesLongNameStealATon
};
