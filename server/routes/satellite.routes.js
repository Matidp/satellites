
const express = require('express');
const satelliteCtrl = require('../controllers/satellite.controller');
const router = express.Router();

router.get('/withindistance', satelliteCtrl.getSatelliteWithinDistance);
router.get('/:name', satelliteCtrl.getSatellite);
router.get('/', satelliteCtrl.getSatellites);
router.post('/', satelliteCtrl.createSatellite);

module.exports = router;

