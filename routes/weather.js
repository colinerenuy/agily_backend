var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const OWM_API_KEY = process.env.OWM_API_KEY;
const nodecache = require('node-cache');
const appCache = new nodecache();

router.get('/:city', async (req, res) => {

  if(appCache.has(req.params.city)){
    console.log('Get data from Node Cache');
    return res.send(appCache.get(req.params.city))
}

else{
  console.log('Fetch data from API');
  console.log('searched city:', req.params.city)
  const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${req.params.city}&limit=1&appid=${OWM_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const lat = data[0].lat;
    const lon = data[0].lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&cnt=7&appid=${OWM_API_KEY}&units=metric`)
    .then(response => response.json())
    .then(apiData => {
      if(apiData) {
        console.log(apiData)
        const data = []
        apiData.daily.map((day,i) => {
          data.push({time: day.dt, tempDay: day.temp.day, tempNight: day.temp.night, humidity: day.humidity, pressure: day.pressure, wind: day.wind_speed, weather: day.weather[0].main })
        })
        
        appCache.set(req.params.city, data);
        res.json({result: true, data: data})
      }
      else {
        res.json({result: false, error: 'city not found'})
      }
    })
  })
}
});

module.exports = router;
