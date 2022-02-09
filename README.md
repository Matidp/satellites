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
    console.log("Can't get all satellites because ", error);
  }
};
```

### Search by Name

This endpoint will return a satellite with the name provided or just None if there isn't a satellite with the name provided.
Just replace "<name>" with the name

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
    console.log(error);
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
    console.log(error);
  }
};
```

## what do you need

- clone the repository
- [Mongodb](https://www.mongodb.com/) installed (v4.4.1)
- [Nodejs](https://nodejs.org/) installed (v15.14.0)
- run in the shell `npm install`
- run in the shell `npm start`
- use the endpoints with postman or just with the browser.
