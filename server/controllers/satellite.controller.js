const res = require("express/lib/response");
const satelliteCtrl = {};
const Satellite = require("../models/satellite");

satelliteCtrl.getSatellite = async (req, res) => {
  try {
    const name = req.params.name;
    const satellite = await Satellite.find({
      "spaceTrack.OBJECT_NAME": {
        $regex: new RegExp("^" + name.toLowerCase(), "i"),
      },
    });
    res.json(satellite);
  } catch (error) {
    res.status(404).send("Not Found");
  }
};

satelliteCtrl.getSatellites = async (req, res) => {
  try {
    const satellites = await Satellite.find();
    res.json(satellites);
  } catch (error) {
    res.status(404).send("Not Found");
  }
};

satelliteCtrl.createSatellite = async (req, res) => {
  try {
    const satellite = new Satellite(req.body);
    await satellite.save();
    res.json({
      status: "satellite saved",
    });
  } catch (error) {
    res.status(500).send("Server error cannot create");
  }
};

satelliteCtrl.createMultipleSatellites = (req, res) => {
  try {
    satellites = req.body;
    satellites.forEach(async element => {
      let satellite = new Satellite(element);
      await satellite.save();
    });
    res.json({
      status: "satellites saved",
    });
  } catch (error) {
    res.status(500).send("Server error cannot create");
  }
};

satelliteCtrl.getSatelliteWithinDistance = async (req, res) => {
  try {
    const latitude = req.query.l1;
    const longitude = req.query.l2;
    const distance = req.query.d;

    const satellites = await Satellite.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: distance,
        },
      },
      longitude: { $ne: null },
      latitude: { $ne: null },
    });
    res.json(satellites);
  } catch (error) {
    res.status(404).send("Not Found");
  }
};

module.exports = satelliteCtrl;
