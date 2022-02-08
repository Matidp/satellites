
const express = require('express');
const satelliteCtrl = require('../controllers/satellite.controller');
const router = express.Router();

router.get('/', satelliteCtrl.getSatellites);
router.post('/', satelliteCtrl.createSatellite);

module.exports = router;