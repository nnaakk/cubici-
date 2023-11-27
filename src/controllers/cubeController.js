const Cube = require('../models/Cube_old')

const db = require('../db.json')

exports.getCreateCube = (req, res) => {
    res.render('create')
}

exports.postCreateCube = (req, res) => {
  
    const {name, description, difficultyLevel, imageUrl} = req.body
    let cube = new Cube(name, description, imageUrl, difficultyLevel)
    Cube.save(cube)
    res.redirect('/')
}

exports.getDetails = (req, res) => {

    let cubeId = Number(req.params.cubeId)
console.log(cubeId);
    if(!cubeId){
      return  res.redirect('/404')
    }
let cube = db.cubes.find(x => x.id === cubeId)

if(!!cube){
    res.render('details', {cube})
    
  }else{
    return  res.redirect('/404')
  }
}