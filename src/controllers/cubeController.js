const Cube = require('../models/Cube')
const Accessory = require('../models/Accessory')


exports.getCreateCube = (req, res) => {
    res.render('create')
}

exports.postCreateCube = async (req, res) => {
    try {
    const { name, description, difficultyLevel, imageUrl } = req.body
    let cube = new Cube({ name, description, imageUrl, difficultyLevel })

    await cube.save(cube)
} catch (err) {
    console.log(err.message);
    return res.redirect('/404')
}

    
    res.redirect('/')
}

exports.getDetails = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean()
    console.log(cube);
    if (!cube) {
        return res.redirect('/404')
    }

        res.render('details', { cube })

}

exports.getAttachAccessory = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean()
    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean()
    res.render('attachAccessory', { cube, accessories })
}

exports.postAttachAccessory = async (req,res) => {
    const cube = await Cube.findById(req.params.cubeId)
    const accessoryId = req.body.accessory
    cube.accessories.push(accessoryId)

   await cube.save()

    res.redirect(`/cubes/${cube._id}/details`)

    console.log(accessoryId);
}