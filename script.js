var search = localStorage.getItem('savedCity')
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&units=imperial&appid=421493e1a9d6d7ce1b656ee17274f671";
var date = moment().format('l')
var time = moment().format('LTS')
$('.date').append(date)
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response)
    var city = response.name
    var temp = response.main.temp
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp, ' °F')
        $('#humidity').append('Humidity: ', humidity)
        $('#windSpeed').append('Wind Speed ', windSpeed)
          
      })


$('button').click(function(){
var search = $('#search').val()
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&units=imperial&appid=421493e1a9d6d7ce1b656ee17274f671";
$('.city').empty()
$('.temp').empty()
$('#humidity').empty()
localStorage.setItem('savedCity', search)
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response)
    var city = response.name
    var temp = response.main.temp
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp, ' °F')
        $('#humidity').append('Humidity: ', humidity)
        $('#windSpeed').append('Wind Speed ', windSpeed)
          
      })
      
    })
    
  
