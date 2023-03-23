

// navigator.geolocation.getCurrentPosition(position => {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&units=metric&appid=22b3541a55542c8f6f9fe906196620ce`)
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       let image = document.getElementById("img")
//       let description = document.getElementById("description")

//       const weatherIcon = data.weather[0].icon
//       const weatherDescription = data.weather[0].description
//       const imageURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
//       image.innerHTML = `<img src="${imageURL}" />`
//       description.textContent = `${weatherDescription}`
//     })
// })

function getValue() {
  const userValue = document.getElementById("location").value
  console.log(userValue)
  let userURL;

  if (location && userValue){
    userURL = `http://api.openweathermap.org/data/2.5/weather?q=${userValue}&units=metric&appid=22b3541a55542c8f6f9fe906196620ce`
  }else{
    userURL = ''
  }

  axios.get(`${userURL}`)
    .then(response => {
      // console.log(response)
      const userLocationDescription = document.getElementById("custom-location-description")
      const userLocationImage = document.getElementById("custom-location-img")

      const userLocationWeather = response.data.weather[0].description
      const userLocationIcon = response.data.weather[0].icon
      console.log(userLocationWeather)
      console.log(userLocationIcon)
      const userImageURL = `https://openweathermap.org/img/wn/${userLocationIcon}@2x.png`
      userLocationImage.innerHTML = `<img src="${userImageURL}" />`
      userLocationDescription.innerHTML = userLocationWeather
    })
}



navigator.geolocation.getCurrentPosition(position => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&units=metric&appid=22b3541a55542c8f6f9fe906196620ce`;
  axios.get(`${url}`)
  .then(response => {
    console.log(response.data)
    let image = document.getElementById('img')
    let description = document.getElementById('description')
    const weatherIcon = response.data.weather[0].icon
    let imageURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    image.innerHTML = `<img src="${imageURL}" />`

    const weatherDetails = response.data.weather[0].description
    description.textContent = weatherDetails
  })
})


const generate = () =>{
  axios.get("https://apis.scrimba.com/bored/api/activity")
    .then(response => {
      console.log(response.data)

      document.getElementById("type").textContent = response.data.type
      document.getElementById("activity").textContent = response.data.activity
    })
}

