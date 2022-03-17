const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require ('../validations/userValidator')
router.get('/user', usersController.getUser);
router.get('/users', usersController.getUsers);
router.post('/user', userValidator.add, usersController.postUser);
router.put('/user', usersController.putUser);
router.delete('/user', usersController.deleteUser);

module.exports = router;