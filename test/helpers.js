const chai = require('chai')
global.expect = chai.expect

const {
  numPointsScored, shoeSize, teamColors, teamNames,
  playerNumbers, playerStats, bigShoeRebounds,
  mostPointsScored, winningTeam, playerWithLongestName, doesLongNameStealATon
} = require('../index.js')

global.numPointsScored = numPointsScored
global.shoeSize = shoeSize
global.teamColors = teamColors
global.teamNames = teamNames
global.playerNumbers = playerNumbers
global.playerStats = playerStats
global.bigShoeRebounds = bigShoeRebounds
global.mostPointsScored = mostPointsScored
global.winningTeam = winningTeam
global.playerWithLongestName = playerWithLongestName
global.doesLongNameStealATon = doesLongNameStealATon
