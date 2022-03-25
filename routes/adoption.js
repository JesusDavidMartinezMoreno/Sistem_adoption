const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require('../validations/adoptionValidator');
const jwtValidator = require('../validations/jwtValidator');

router.get('/adoption', jwtValidator.validateToken, adoptionsController.getAdoption);
router.get('/adoptions',jwtValidator.validateToken, adoptionValidator.id, adoptionsController.getAdoptions);
router.post('/adoption',jwtValidator.validateToken, adoptionValidator.add, adoptionsController.postAdoption);
router.put('/adoption',jwtValidator.validateToken, adoptionValidator.update, adoptionsController.putAdoption);
router.delete('/adoption',jwtValidator.validateToken, adoptionValidator.id, adoptionsController.deleteAdoption);
router.get('/adoptionUser',jwtValidator.validateToken, adoptionsController.getAdoptionByUser);

module.exports = router;