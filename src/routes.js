const router = require('express').Router()


const  cubeController  = require('./controllers/cubeController')
const  homeController  = require('./controllers/homeController')

const accessoryController = require('./controllers/accessoryController')


router.get('/' , homeController.getHome)
router.get('/about' , homeController.getAbout)
router.get('/404' , homeController.getError)

router.get('/cubes/create' , cubeController.getCreateCube)
router.post('/cubes/create' , cubeController.postCreateCube)
router.get('/cubes/:cubeId/details' , cubeController.getDetails)
router.get('/cubes/:cubeId/attach' , cubeController.getAttachAccessory)
router.post('/cubes/:cubeId/attach' , cubeController.postAttachAccessory)

//router.get('*', homeController.getError)

router.use('/accessories', accessoryController)

module.exports = router