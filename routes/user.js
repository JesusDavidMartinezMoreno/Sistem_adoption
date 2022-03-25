const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require ('../validations/userValidator')
const jwtToken = require("../validations/jwtValidation")

router.post('/login', usersController.getLogin);
router.get('/user', /*jwt.validateToken,*/ userValidator.id, usersController.getUser);
router.get('/users', usersController.getUsers);
router.post('/user',  userValidator.add, usersController.postUser);
router.put('/user', userValidator.update , usersController.putUser);
router.delete('/user', userValidator.id, usersController.deleteUser);

module.exports = router;