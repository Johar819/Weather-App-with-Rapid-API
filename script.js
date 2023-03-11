const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5f4cac42cmsh31d28f6c738e9ebp18771djsn67f26d3e8202',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function getWeather(target_city){
    cityHead.innerHTML=target_city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+target_city, options)
	.then(response => response.json())
	.then((response) => {
        temp.innerHTML=response.temp;
        // minTemp.innerHTML=response.min_temp+ "&#8451";
        // maxTemp.innerHTML=response.max_temp+ "&#8451";
        humidity.innerHTML=response.humidity;
        windSpeed.innerHTML=(response.wind_speed*1.852).toFixed(2); 
        console.log(response);
            })
	.catch(err => console.error(err));
        }
document.getElementById("submit").addEventListener('click',(e)=>{
    console.log("event happened");
    e.preventDefault();
    getWeather(city.value);
})
getWeather("Patna");

var i=0;
const arr=["Shanghai","Boston","Kolkata","Lucknow"];
function footWeather(){
    for(let i=0;i<4;i++) {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+arr[i], options)
	.then(response => response.json())
	.then((response) => {
        const ctemp=(arr[i]+"temp");
        const cminTemp=(arr[i]+"minTemp");
        const cmaxTemp=(arr[i]+"maxTemp");
        const chumidity=(arr[i]+"humidity");
        const cwindSpeed=(arr[i]+"windSpeed");
        document.getElementById(`${ctemp}`).innerHTML=response.temp;
        document.getElementById(`${cminTemp}`).innerHTML=response.min_temp;
        document.getElementById(`${cmaxTemp}`).innerHTML=response.max_temp;
        document.getElementById(`${chumidity}`).innerHTML=response.humidity;
        document.getElementById(`${cwindSpeed}`).innerHTML=response.wind_speed;
        // console.log(response);
            })
	.catch(err => console.error(err));
            // console.log(i);
    };
}
setInterval(footWeather,5000);