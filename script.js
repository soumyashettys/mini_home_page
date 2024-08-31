// const API_KEY = 'a8fb7dcb86mshca25d30b8d9aca8p191876jsnef6f0f57a74c';
const API_KEY = '0d455a7d68msh3d52238ac086d75p1778d9jsn8761a81704c6';
const API_HOST = 'weather-by-api-ninjas.p.rapidapi.com';

// const API_KEY = 'a8fb7dcb86mshca25d30b8d9aca8p191876jsnef6f0f57a74c';
// const API_HOST = 'yahoo-weather5.p.rapidapi.com';

const getWeather = async (city) => {
  cityName.innerHTML=city;
  const url = `https://${API_HOST}/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    const jsonData = await response.json();

    console.log(jsonData);

    // Access properties on the jsonData object
    cloud_pct.innerHTML = jsonData.cloud_pct;
    temp.innerHTML = jsonData.temp;
    temp2.innerHTML = jsonData.temp;
    feels_like.innerHTML=jsonData.feels_like;
    humidity.innerHTML = jsonData.humidity;
    humidity2.innerHTML = jsonData.humidity;
    min_temp.innerHTML = jsonData.min_temp;
    max_temp.innerHTML = jsonData.max_temp;
    wind_speed.innerHTML = jsonData.wind_speed;
    wind_speed2.innerHTML = jsonData.wind_speed;
    // wind_degrees.innerHTML = jsonData.wind_degrees;
    sunrise.innerHTML = jsonData.sunrise;
    sunset.innerHTML = jsonData.sunset;
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
function updateTable(data)
{
  const tableRows = document.querySelectorAll('tbody tr');
}
getWeather("Karnataka");


// try {
//   const response = await fetch(url, delhi);
//   const jsonData = await response.json();

//   // Update table cells with weather data
//   document.getElementById('feels_likem').textContent = jsonData.feels_like;
//   // document.getElementById('sunrise').textContent = jsonData.sunrise;
//   // document.getElementById('sunset').textContent = jsonData.sunset;
// } catch (error) {
//   console.error(error);
// }
// };

