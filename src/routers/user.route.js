const router = require('express').Router();
const {userController} = require('../controllers');

router.get('/', userController.getAllUsers)
      .post('/', userController.createUser)
      .get('/:id', userController.getUser)
      .put('/:id', userController.updateUser)
      .delete('/:id', userController.deleteUser)

module.exports = router;