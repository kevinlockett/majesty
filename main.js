const queens = []
const tributeChest = []

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

// Create some queens
createQueen(1, "Peggy Lockett")
createQueen(2, "Mary Karboviak")
createQueen(3, "Sarah Smith")
createQueen(4, "Elizabeth Joy Kaiser")
createQueen(5, "Kaitlyn Lockett")

// Hail all of the queens
for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

// Pay tributes to queens
payTribute(1, "the ever faithful love of her King", 1)
payTribute(2, "50 pounds of fine imported coffee", 2)
payTribute(3, "a side of dry-aged beef", 4)
payTribute(4, "3 barrels of oak smoked herring", 3)
payTribute(5, "2 wheels of sharp cheddar cheese", 5)
payTribute(6, "a castle on Nottingham", 1)

// Iterate the queen objects to show tribute for each one
for (const queen of queens) {
    
    // Each queen will look at each item to see if it is hers
    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
            console.log(`Queen ${queen.name} has received her tribute, ${tribute.description} with great joy.`)
        }
    }
}
