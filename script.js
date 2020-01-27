var search = localStorage.getItem('savedCity')
var wApi = "421493e1a9d6d7ce1b656ee17274f671"
var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&units=imperial&appid=" + wApi;

var date = moment().format('l')
var time = moment().format('LTS')
$('.date').append(date)
$.ajax({
    url: queryURLCity,
    method: "GET"
  }).then(function(response) {
      //console.log(response)
    var city = response.name
    var temp = response.main.temp
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
    var forCasts = response.weather
    var lat = response.coord.lat
    var lon = response.coord.lon
    var weather = forCasts.slice()
    weather.forEach(function(forCast){
        var mainForecast = forCast.main
        //var desForecast = forCast.description
        if (mainForecast === "Clear"){
          $('#forecast').append('<img id="clear" src="https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Moon_Night_Sky-64.png">')  
        }
        if (mainForecast === "Clouds"){
            $('#forecast').append('<img id="clouds" src="https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Cloudy_Season_Cloud-64.png">')
        }
        if (mainForecast === "Rain")
        $('#forecast').append('<img id="rain" src="https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Rain_Cloud_Climate-64.png">')
        console.log(mainForecast)
        if (mainForecast === "Snow"){
            $('#forecast').append('<img id="snow" src="https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Flake_Flakes_Snowflake-64.png">')
        }
        if (mainForecast === "Mist"){
            $('#forecast').append('<img id="mist" src="https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Sunny_Flake_Cloud-64.png">')
        }
    })
        
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp, '°F')
        $('#humidity').append('Humidity: ', humidity,'%')
        $('#windSpeed').append('Wind Speed ', windSpeed)
          
         var queryURLUvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + wApi;
         $.ajax({
            url: queryURLUvIndex,
            method: "GET"
          }).then(function(response){
            $('#uvIndex').append('UV Index ', response.value)
          })
          var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+ search +"&units=imperial&appid=" + wApi;
          $.ajax({
              url: queryURLForecast,
              method: "GET"
          }).then(function(response){
              
            var results = response.list
            
            var dayOne = results.slice(6,7)
            dayOne.forEach(function(result) {
                var fDate = moment().add(1, 'days').calendar()
                var fTemp = result.main.temp
                var fHumidity = result.main.humidity
                //console.log(result) 
                $('#fDate').append(fDate)
                $('#fTemp').append('Temp: ', fTemp, '°F')
                $('#fHumidity').append('Humidity: ', fHumidity,'%')
            })
            var dayTwo = results.slice(13,14)
            dayTwo.forEach(function(result) {
                var sDate = moment().add(2, 'days').calendar()
                var sTemp = result.main.temp
                var sHumidity = result.main.humidity
                $('#sDate').append(sDate);
                $('#sTemp').append('Temp: ',sTemp, '°F');
                $('#sHumidity').append('Humidity: ',sHumidity,'%')
            })
            var dayThree = results.slice(20,21)
            dayThree.forEach(function(result) {
                var tDate = moment().add(3, 'days').calendar()
                var tTemp = result.main.temp
                var tHumidity = result.main.humidity
                $('#tDate').append(tDate);
                $('#tTemp').append('Temp: ',tTemp, '°F');
                $('#tHumidity').append('Humidity: ',tHumidity,'%'); 
                
            })
            var dayFour = results.slice(27,28)
            dayFour.forEach(function(result) {
                var dateF = moment().add(4, 'days').calendar()
                var tempF = result.main.temp
                var humidityF = result.main.humidity
                $('#dateF').append(dateF);
                $('#tempF').append('Temp: ',tempF, '°F');
                $('#humidityF').append('Humidity: ',humidityF,'%'); 
                //console.log(result)
            })
            var dayFive = results.slice(34,35)
            dayFive.forEach(function(result) {
                var dateFi = moment().add(5, 'days').calendar()
                var tempFi = result.main.temp
                var humidityFi = result.main.humidity
                $('#dateFi').append(dateFi);
                $('#tempFi').append('Temp: ',tempFi, '°F');
                $('#humidityFi').append('Humidity: ',humidityFi,'%'); 
               // console.log(result)
            })
          })
      })


$('button').click(function(){
var search = $('#search').val()
var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&units=imperial&appid=421493e1a9d6d7ce1b656ee17274f671";
$('.city').empty()
$('.temp').empty()
$('#humidity').empty()
$('#windSpeed').empty()
$('#uvIndex').empty()
$('.card-title').empty()
$('.card-text').empty()
$('.card-header').empty()
localStorage.setItem('savedCity', search)
$.ajax({
    url: queryURLCity,
    method: "GET"
  }).then(function(response) {
      //console.log(response)
    var city = response.name
    var temp = response.main.temp
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
    var lat = response.coord.lat
    var lon = response.coord.lon
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp, '°F')
        $('#humidity').append('Humidity: ', humidity)
        $('#windSpeed').append('Wind Speed ', windSpeed)
        var queryURLUvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + wApi;
         $.ajax({
            url: queryURLUvIndex,
            method: "GET"
          }).then(function(response){
            $('#uvIndex').append('UV Index ', response.value)
          })
          var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+ search +"&units=imperial&appid=" + wApi;
          $.ajax({
              url: queryURLForecast,
              method: "GET"
          }).then(function(response){
              
            var results = response.list
            
            var dayOne = results.slice(6,7)
            dayOne.forEach(function(result) {
                var fDate = moment().add(1, 'days').calendar()
                var fTemp = result.main.temp
                var fHumidity = result.main.humidity
                //console.log(result) 
                $('#fDate').append(fDate)
                $('#fTemp').append('Temp: ', fTemp, '°F')
                $('#fHumidity').append('Humidity: ', fHumidity)
            })
            var dayTwo = results.slice(13,14)
            dayTwo.forEach(function(result) {
                var sDate = moment().add(2, 'days').calendar()
                var sTemp = result.main.temp
                var sHumidity = result.main.humidity
                $('#sDate').append(sDate);
                $('#sTemp').append('Temp: ',sTemp, '°F');
                $('#sHumidity').append('Humidity: ',sHumidity)
            })
            var dayThree = results.slice(20,21)
            dayThree.forEach(function(result) {
                var tDate = moment().add(3, 'days').calendar()
                var tTemp = result.main.temp
                var tHumidity = result.main.humidity
                $('#tDate').append(tDate);
                $('#tTemp').append('Temp: ',tTemp, '°F');
                $('#tHumidity').append('Humidity: ',tHumidity); 
                
            })
            var dayFour = results.slice(27,28)
            dayFour.forEach(function(result) {
                var dateF = moment().add(4, 'days').calendar()
                var tempF = result.main.temp
                var humidityF = result.main.humidity
                $('#dateF').append(dateF);
                $('#tempF').append('Temp: ',tempF, '°F');
                $('#humidityF').append('Humidity: ',humidityF); 
                //console.log(result)
            })
            var dayFive = results.slice(34,35)
            dayFive.forEach(function(result) {
                var dateFi = moment().add(5, 'days').calendar()
                var tempFi = result.main.temp
                var humidityFi = result.main.humidity
                $('#dateFi').append(dateFi);
                $('#tempFi').append('Temp: ',tempFi, '°F');
                $('#humidityFi').append('Humidity: ',humidityFi); 
                //console.log(result)
            })
          })
      })
      
    })
    
  
