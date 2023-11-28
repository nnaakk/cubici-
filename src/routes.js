const router = require('express').Router()


const  cubeController  = require('./controllers/cubeController')
const  homeController  = require('./controllers/homeController')

const accessoryController = require('./controllers/accessoryController')


router.get('/' , homeController.getHome)
router.get('/about' , homeController.getAbout)
router.get('/404' , homeController.getError)

router.get('/create' , cubeController.getCreateCube)
router.post('/create' , cubeController.postCreateCube)
router.get('/details/:cubeId' , cubeController.getDetails)



//router.get('*', homeController.getError)

router.use('/accessory', accessoryController)

module.exports = router