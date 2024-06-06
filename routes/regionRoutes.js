const express = require('express');
const regionController = require('../controllers/regionController');

const router = express.Router();

router.get('/provinces', regionController.getProvinces);
router.get('/cities', regionController.getCitiesByProvince);
router.get('/districts', regionController.getDistrictsByCity);

module.exports = router;