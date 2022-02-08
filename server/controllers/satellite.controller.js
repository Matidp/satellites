const res = require("express/lib/response");
const satelliteCtrl = {};
const Satellite = require('../models/satellite');

satelliteCtrl.getSatellites = async (req, res) => {
    const satellites = await Satellite.find();
    res.json(satellites);
}

satelliteCtrl.createSatellite = async (req, res) => {
    const satellite = new Satellite(req.body)
    await satellite.save()
    console.log(satellite);
    res.json({
        'status': 'satellite saved'
    })
}

module.exports = satelliteCtrl;