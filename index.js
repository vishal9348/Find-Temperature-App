let weather = {
    apiKey: "cc77da9969f046e8bfbadb2fe9c41b26",

    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" +this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const {name} = data;
        const {temp} =data.main;
        const {description} = data.weather[0];
        const {speed} = data.wind;

        // console.log(name, temp, description, speed);

        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".description").innerText = "Sky Condition: " +description;
        document.querySelector(".temp").innerText = "Temprature: "+temp+" C";
        document.querySelector(".wind").innerText = "Speed: "+speed+" km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector("#input-box").value);
    },
};

document.querySelector(".btn-s").addEventListener("click", function(){
    weather.search();
});