# Satellite coordination system
You are an engineer at NASA tasked with building a satellite coordination system that allows scientists to analyze the positions of active satellites.

## Backend project:
* Build a backend API service that returns the live information of satellites. An example of this API response is https://api.spacexdata.com/v4/starlink (we are recreating this API endpoint)
* Create a database with the appropriate schema. You can use any database of choice. To keep things simple, you can use Sqlite3
* Bonus: create an API endpoint that allows search by satellite name
* Bonus: create an API that takes as input parameters a (latitude l1, longitude l2, distance d) and returns all satellites that are within a maximum distance d from (l1, l2)


## How to

### Get all satellites
This endpoint return all satellite data in the database.
```
http://localhost:3000/api/satellite
```
```js
satelliteCtrl.getSatellites = async (req, res) => {
    const satellites = await Satellite.find();
    res.json(satellites);
}
```

## what do you need

* clone the repository
* [Mongodb](https://www.mongodb.com/) installed
* [Nodejs](https://nodejs.org/) installed
* run in the shell `npm install`
* run in the shell `npm start`
* use the endpoints with postman or just with the browser. 
