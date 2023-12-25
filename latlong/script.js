const button=document.getElementById("btn-location");

async function getData(lat,long){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=ddff3ae1b2f04dd1a82100407232512&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}

async function successFetchData(position){
    const data=await getData(position.coords.latitude, position.coords.longitude);
    console.log(data);
}

function FailedToFetchData(){
    console.log("Error to fetch data");
}

button.addEventListener("click", async() => {
    navigator.geolocation.getCurrentPosition(successFetchData, FailedToFetchData);
});

