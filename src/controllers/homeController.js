const Cube = require('../models/Cube')

exports.getHome = async (req,res) => {

    let { search, from, to}  = req.query

    let cubes = await Cube.find().lean()

    if(search) {
        cubes = cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from){
        cubes = cubes.filter(x => x.difficultyLevel >= from)
    }
    if(to){
        cubes = cubes.filter(x => x.difficultyLevel <= from)
    }
    res.render('index', {cubes})
}

exports.getAbout =  (req,res) => {
    res.render('about' )
}

exports.getError =  (req,res) => {
    res.render('404')
}

