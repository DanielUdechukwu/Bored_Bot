
const generate = () =>{
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      console.log(data)

      document.getElementById("type").textContent = data.type
      document.getElementById("activity").textContent = data.activity
    })
}