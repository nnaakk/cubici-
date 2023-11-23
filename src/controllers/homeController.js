const db = require('../db.json');
const { search } = require('../routes');

exports.getHome =  (req,res) => {

    let { search, from, to}  = req.query

    let cubes = db.cubes

    if(search) {
        cubes = cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }
    res.render('index', {cubes})
}

exports.getAbout =  (req,res) => {
    res.render('about' )
}

exports.getError =  (req,res) => {
    res.render('404')
}

