const Cube = require('../models/Cube')



exports.getCreateCube = (req, res) => {
    res.render('create')
}

exports.postCreateCube = async (req, res) => {

    const { name, description, difficultyLevel, imageUrl } = req.body
    let cube = new Cube({ name, description, imageUrl, difficultyLevel })
    await cube.save(cube)
    res.redirect('/')
}

exports.getDetails = async (req, res) => {

   const cube = await Cube.findById(req.params.cubeId).lean()
    if (!cube) {
        return res.redirect('/404')
    }
    

   else{
        res.render('details', { cube })

    } 
}