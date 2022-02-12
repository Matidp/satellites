# Satellite coordination system

You are an engineer at NASA tasked with building a satellite coordination system that allows scientists to analyze the positions of active satellites.

## Backend project:

- Build a backend API service that returns the live information of satellites. An example of this API response is https://api.spacexdata.com/v4/starlink (we are recreating this API endpoint)
- Create a database with the appropriate schema. You can use any database of choice. To keep things simple, you can use Sqlite3
- Bonus: create an API endpoint that allows search by satellite name
- Bonus: create an API that takes as input parameters a (latitude l1, longitude l2, distance d) and returns all satellites that are within a maximum distance d from (l1, l2)

## How to

### Get all satellites

This endpoint return all satellite data in the database.

```
http://localhost:3000/api/satellite
```

```js
satelliteCtrl.getSatellites = async (req, res) => {
  try {
    const satellites = await Satellite.find();
    res.json(satellites);
  } catch (error) {
    res.status(404).send("Not Found");
  }
};
```

### Search by Name

This endpoint will return a satellite with the name provided or just None if there isn't a satellite with the name provided.
Just replace "< name >" with the name

```
http://localhost:3000/api/satellite/<name>
```

```js
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
```

### All satellites that are within a maximum distance d from (l1, l2)

```
http://localhost:3000/api/satellite/withindistance?l1=<latitude>&l2=<longitude>&d=<distance in meters>
```

```js
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
```

### Create Satellites

In the body send a list of satellites.

```
http://localhost:3000/api/satellite
```

```js
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
```

#### example body

```
[{"spaceTrack":{"CCSDS_OMM_VERS":"2.0","COMMENT":"GENERATED VIA SPACE-TRACK.ORG API","CREATION_DATE":"2020-10-13T04:16:08","ORIGINATOR":"18 SPCS","OBJECT_NAME":"STARLINK-30","OBJECT_ID":"2019-029K","CENTER_NAME":"EARTH","REF_FRAME":"TEME","TIME_SYSTEM":"UTC","MEAN_ELEMENT_THEORY":"SGP4","EPOCH":"2020-10-13T02:56:59.566560","MEAN_MOTION":16.43170483,"ECCENTRICITY":0.0003711,"INCLINATION":52.9708,"RA_OF_ASC_NODE":332.0356,"ARG_OF_PERICENTER":120.7278,"MEAN_ANOMALY":242.0157,"EPHEMERIS_TYPE":0,"CLASSIFICATION_TYPE":"U","NORAD_CAT_ID":44244,"ELEMENT_SET_NO":999,"REV_AT_EPOCH":7775,"BSTAR":0.0022139,"MEAN_MOTION_DOT":0.47180237,"MEAN_MOTION_DDOT":0.000012426,"SEMIMAJOR_AXIS":6535.519,"PERIOD":87.635,"APOAPSIS":159.809,"PERIAPSIS":154.958,"OBJECT_TYPE":"PAYLOAD","RCS_SIZE":"LARGE","COUNTRY_CODE":"US","LAUNCH_DATE":"2019-05-24","SITE":"AFETR","DECAY_DATE":"2020-10-13","DECAYED":1,"FILE":2850561,"GP_ID":163365918,"TLE_LINE0":"0 STARLINK-30","TLE_LINE1":"1 44244U 19029K   20287.12291165  .47180237  12426-4  22139-2 0  9995","TLE_LINE2":"2 44244  52.9708 332.0356 0003711 120.7278 242.0157 16.43170483 77756"},"launch":"5eb87d30ffd86e000604b378","version":"v0.9","height_km":null,"latitude":null,"longitude":null,"velocity_kms":null,"id":"5eed770f096e59000698560d"}]
```

## What do you need

- clone the repository
- [Mongodb](https://www.mongodb.com/) installed (v4.4.1)
- [Nodejs](https://nodejs.org/) installed (v15.14.0)
- run in the shell `npm install`
- run in the shell `npm start`
- use the endpoints with postman or just with the browser.
