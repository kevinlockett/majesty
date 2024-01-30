const { queens, tributeChest } = require("./data.js")

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const hailTheQueen = (queenName) => {
    return `Hail Her Majesty, ${queenName}.`  // This function returns a string
}

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tributeObject)
}

module.exports = { createQueen, hailTheQueen, payTribute }