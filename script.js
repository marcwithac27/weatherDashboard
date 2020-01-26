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
    var lat = response.coord.lat
    var lon = response.coord.lon
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp, ' °F')
        $('#humidity').append('Humidity: ', humidity)
        $('#windSpeed').append('Wind Speed ', windSpeed)
         //console.log(lat, lon) 
         var queryURLUvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + wApi;
         $.ajax({
            url: queryURLUvIndex,
            method: "GET"
          }).then(function(response){
            $('#uvIndex').append('UV Index ', response.value)
          })
          var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=" + wApi;
          $.ajax({
              url: queryURLForecast,
              method: "GET"
          }).then(function(response){
              console.log(response)
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
localStorage.setItem('savedCity', search)
$.ajax({
    url: queryURLCity,
    method: "GET"
  }).then(function(response) {
      console.log(response)
    var city = response.name
    var temp = response.main.temp
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
    var lat = response.coord.lat
    var lon = response.coord.lon
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp, ' °F')
        $('#humidity').append('Humidity: ', humidity)
        $('#windSpeed').append('Wind Speed ', windSpeed)
        var queryURLUvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + wApi;
         $.ajax({
            url: queryURLUvIndex,
            method: "GET"
          }).then(function(response){
            $('#uvIndex').append('UV Index ', response.value)
          })
      })
      
    })
    
  
