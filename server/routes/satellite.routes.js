const express = require("express");
const satelliteCtrl = require("../controllers/satellite.controller");
const router = express.Router();

router.get("/fromdate", satelliteCtrl.getSatelliteFromDate);
router.get("/withindistance", satelliteCtrl.getSatelliteWithinDistance);
router.get("/:name", satelliteCtrl.getSatellite);
router.get("/", satelliteCtrl.getSatellites);
router.post("/", satelliteCtrl.createMultipleSatellites);

module.exports = router;
