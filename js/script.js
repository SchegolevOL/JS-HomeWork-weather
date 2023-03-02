document
  .querySelector(".formSity")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    let sity = event.target.sityName.value;
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=079a3aaf7cde90e18d39bd4285644528`;
    await main(urlApi);
  });

async function main(url) {
  let response;
  let json;
  response = await fetch(url, { method: "GET" });
  json = await response.json();
  console.log(json);
  if (json.cod == 200) {
    outputWeather(json);
    console.log();
  }else{
    alert(`${json.cod} ${json.message}`);
  }
}

function outputWeather(json) {
  document.querySelector(".card").classList.remove("none", false);
  let sity = document.querySelector(".card-body");
  let data = document.querySelector("#data");
  //console.log(data);
  data.children[0].innerText = `Temperature: ${json.main.temp} K`;
  data.children[1].innerText = `Temperature: ${(json.main.temp - 273).toFixed(
    1
  )} C`;
  data.children[2].innerText = `Pressure: ${json.main.pressure} hPa`;
  data.children[3].innerHTML = `Wind speed: ${
    json.wind.speed
  } meter/sec<img src="${WindDirection(json)}" alt="">`;
  sity.children[0].innerText = json.name;
  //console.log(Date.now());
  //sity.children[1].innerText = -json.timezone * 100;
}

function WindDirection(json) {
  if (
    (json.wind.deg >= 337.5 && json.wind.deg < 360) ||
    (json.wind.deg >= 0 && json.wind.deg < 22.5)
  )
    return "./images/WindDirection/west.svg";
  if (json.wind.deg >= 22.5 && json.wind.deg < 67.5)
    return "./images/WindDirection/north-west.svg";
  if (json.wind.deg >= 67.5 && json.wind.deg < 112.5)
    return "./images/WindDirection/north.svg";
  if (json.wind.deg >= 112.5 && json.wind.deg < 157.5)
    return "./images/WindDirection/north-east.svg";
  if (json.wind.deg >= 157.5 && json.wind.deg < 202.5)
    return "./images/WindDirection/east.svg";
  if (json.wind.deg >= 202.5 && json.wind.deg < 247.5)
    return "./images/WindDirection/south-east.svg";
  if (json.wind.deg >= 247.5 && json.wind.deg < 292.5)
    return "./images/WindDirection/south.svg";
  if (json.wind.deg >= 292.5 && json.wind.deg < 337.5)
    return "./images/WindDirection/south-west.svg";
}
