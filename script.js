

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

axios.get('https://api.openweathermap.org/data/2.5/weather?lon=6.974604&lat=4.8472226&units=metric&appid=22b3541a55542c8f6f9fe906196620ce')
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



const generate = () =>{
  axios.get("https://apis.scrimba.com/bored/api/activity")
    .then(response => {
      console.log(response.data)

      document.getElementById("type").textContent = response.data.type
      document.getElementById("activity").textContent = response.data.activity
    })
}

