const fs = require('fs')

const db = require('../db.json')

const path = require('path')


class Cube {
    constructor(name, description, imageUrl, difficultyLavel) {
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.difficultyLavel = difficultyLavel
    }

    static save(cube) {
        db.cubes.push(cube)
        const jsonData = JSON.stringify(db, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)
    }
}
module.exports = Cube