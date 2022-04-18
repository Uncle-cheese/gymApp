const userController = require('../controllers/userController')
const {Router} = require('express')
const router = Router()


//user routes
router.post('/',userController.createUser);
router.get('/',userController.getAllUsers);

module.exports = router;