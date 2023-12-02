const router = require('express').Router()
const Accessory = require('../models/Accessory')



router.get('/create',(req,res) => {
   res.render('createAccessory')
})

router.post('/create', async (req,res) => {
const {name, description,imageUrl} = req.body

let accessory = new Accessory({name, description,imageUrl})
   try {
      await accessory.save(accessory)
   } catch (err) {
      console.log(err.message);
      return res.redirect('/404')
   } 


res.redirect('/')
})




module.exports = router