const express = require("express");
const router = express.Router();
const petsController = require('../controllers/petsController');
const petValidator = require('../validations/petValidator');
const jwtValidator = require('../validations/jwtValidator');

router.get('/pet', jwtValidator.validateToken, petValidator.id, petsController.getPet);
router.get('/pets', jwtValidator.validateToken, petsController.getPets);
router.post('/pet', jwtValidator.validateToken, petValidator.add, petsController.postPet);
router.put('/pet', jwtValidator.validateToken, petValidator.update, petsController.putPet);
router.delete('/pet', jwtValidator.validateToken, petValidator.id, petsController.deletePet);

module.exports = router;