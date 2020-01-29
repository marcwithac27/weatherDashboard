var search = $('#search').val()
var search1 = localStorage.getItem('savedCity')
var search2 = localStorage.getItem('search2')
var search3 = localStorage.getItem('search3')
var search4 = localStorage.getItem('search4')

var wApi = "421493e1a9d6d7ce1b656ee17274f671"
var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q="+ search1 +"&units=imperial&appid=" + wApi;

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
    
    var forCasts = response.weather
    var weather = forCasts.slice()
    weather.forEach(function(forCast){
        
        var icon = forCast.icon
        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
        console.log(iconUrl)
        $('#forecast').append('<img id="clouds" src=' + iconUrl +'>')
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
          var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+ search1 +"&units=imperial&appid=" + wApi;
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
                var fForecasts = result.weather
                var weather = fForecasts.slice()
    weather.forEach(function(fForecast){
                var dayOneIcon = fForecast.icon
                var dayOneIconUrl = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
        //console.log(iconUrl)
        $('#fForecast').append('<img id="clouds" src=' + dayOneIconUrl +'>')
    })
                 
                $('#fDate').append(fDate)
                $('#fTemp').append('Temp: ', fTemp, '°F')
                $('#fHumidity').append('Humidity: ', fHumidity,'%')
            })
            var dayTwo = results.slice(13,14)
            dayTwo.forEach(function(result) {
                var sDate = moment().add(2, 'days').calendar()
                var sTemp = result.main.temp
                var sHumidity = result.main.humidity
                var sForecasts = result.weather
                var weather = sForecasts.slice()
    weather.forEach(function(sForecast){
        var dayTwoIcon = sForecast.icon
        var dayTwoIconUrl = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
        //console.log(iconUrl)
        $('#sForecast').append('<img id="clouds" src=' + dayTwoIconUrl +'>')

    })
                $('#sDate').append(sDate);
                $('#sTemp').append('Temp: ',sTemp, '°F');
                $('#sHumidity').append('Humidity: ',sHumidity,'%')
            })
            var dayThree = results.slice(20,21)
            dayThree.forEach(function(result) {
                var tDate = moment().add(3, 'days').calendar()
                var tTemp = result.main.temp
                var tHumidity = result.main.humidity
                var tForecasts = result.weather
                var weather = tForecasts.slice()
    weather.forEach(function(tForecast){
        var dayThreeIcon = tForecast.icon
        var dayThreeIconUrl = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
        console.log(dayThreeIconUrl)
        $('#tForeCast').append('<img id="clouds" src=' + dayThreeIconUrl +'>')
    })
                $('#tDate').append(tDate);
                $('#tTemp').append('Temp: ',tTemp, '°F');
                $('#tHumidity').append('Humidity: ',tHumidity,'%'); 
                
            })
            var dayFour = results.slice(27,28)
            dayFour.forEach(function(result) {
                var dateF = moment().add(4, 'days').calendar()
                var tempF = result.main.temp
                var humidityF = result.main.humidity
                var forecastTs = result.weather
                var weather = forecastTs.slice()
    weather.forEach(function(forecastT){
        var dayFourIcon = forecastT.icon
        var dayFourIconUrl = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
        console.log(dayFourIconUrl)
        $('#foreCastF').append('<img id="clouds" src=' + dayFourIconUrl +'>')
                })
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
                var forecastFis = result.weather
                var weather = forecastFis.slice()
    weather.forEach(function(forecastFi){
        var dayFiveIcon = forecastFi.icon
        var dayFiveIconUrl = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
        console.log(dayFiveIconUrl)
        $('#foreCastFi').append('<img id="clouds" src=' + dayFiveIconUrl +'>')
                })
                $('#dateFi').append(dateFi);
                $('#tempFi').append('Temp: ',tempFi, '°F');
                $('#humidityFi').append('Humidity: ',humidityFi,'%'); 
               // console.log(result)
            })
          })
      })


$('button').click(function(){
var search = $('#search').val()

var search1 = localStorage.getItem('savedCity')
var search2 = localStorage.getItem('search2')
var search3 = localStorage.getItem('search3')
var search4 = $('#search4').val()
var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&units=imperial&appid=421493e1a9d6d7ce1b656ee17274f671";
$('.city').empty()
$('.temp').empty()
$('#humidity').empty()
$('#windSpeed').empty()
$('#uvIndex').empty()
$('.card-title').empty()
$('.card-text').empty()
$('.card-header').empty()
$('.forecast').empty()
$('#search1').empty()
$('#search2').empty()
$('#search3').empty()
$('#search4').empty()
if (search !== search1 && search !== search2 && search !==search3 && search !== search4){
    console.log(search1, search2,search3, search4)
    $('#search1').append(search).addClass('show')
    $('#search2').append(search1)
    $('#search3').append(search2)
    $('#search4').append(search3)
    localStorage.setItem('search2', search1)
    localStorage.setItem('savedCity', search)
    localStorage.setItem('search3', search2)
    localStorage.setItem('search4', search3)
    localStorage.setItem('search', search4)
} 
if (search2 !== null && search3 !== null && search4 !== null){
    $('#search2').addClass('show')
    $('#search3').addClass('show')
    $('#search4').addClass('show')
}
// .unbind is used to clear click event
$('tr').unbind("click").on('click', function(){
    console.log($(this).text().trim())
    search = $(this).text()
    var wApi = "421493e1a9d6d7ce1b656ee17274f671"
var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&units=imperial&appid=" + wApi;
$('.city').empty()
$('.temp').empty()
$('#humidity').empty()
$('#windSpeed').empty()
$('#uvIndex').empty()
$('.card-title').empty()
$('.card-text').empty()
$('.card-header').empty()
$('.forecast').empty()

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
    
    var forCasts = response.weather
    var weather = forCasts.slice()
    weather.forEach(function(forCast){
        
        var icon = forCast.icon
        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
        console.log(iconUrl)
        $('#forecast').append('<img id="clouds" src=' + iconUrl +'>')
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
          var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+ search1 +"&units=imperial&appid=" + wApi;
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
                var fForecasts = result.weather
                var weather = fForecasts.slice()
    weather.forEach(function(fForecast){
                var dayOneIcon = fForecast.icon
                var dayOneIconUrl = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
        //console.log(iconUrl)
        $('#fForecast').append('<img id="clouds" src=' + dayOneIconUrl +'>')
    })
                 
                $('#fDate').append(fDate)
                $('#fTemp').append('Temp: ', fTemp, '°F')
                $('#fHumidity').append('Humidity: ', fHumidity,'%')
            })
            var dayTwo = results.slice(13,14)
            dayTwo.forEach(function(result) {
                var sDate = moment().add(2, 'days').calendar()
                var sTemp = result.main.temp
                var sHumidity = result.main.humidity
                var sForecasts = result.weather
                var weather = sForecasts.slice()
    weather.forEach(function(sForecast){
        var dayTwoIcon = sForecast.icon
        var dayTwoIconUrl = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
        //console.log(iconUrl)
        $('#sForecast').append('<img id="clouds" src=' + dayTwoIconUrl +'>')

    })
                $('#sDate').append(sDate);
                $('#sTemp').append('Temp: ',sTemp, '°F');
                $('#sHumidity').append('Humidity: ',sHumidity,'%')
            })
            var dayThree = results.slice(20,21)
            dayThree.forEach(function(result) {
                var tDate = moment().add(3, 'days').calendar()
                var tTemp = result.main.temp
                var tHumidity = result.main.humidity
                var tForecasts = result.weather
                var weather = tForecasts.slice()
    weather.forEach(function(tForecast){
        var dayThreeIcon = tForecast.icon
        var dayThreeIconUrl = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
        console.log(dayThreeIconUrl)
        $('#tForeCast').append('<img id="clouds" src=' + dayThreeIconUrl +'>')
    })
                $('#tDate').append(tDate);
                $('#tTemp').append('Temp: ',tTemp, '°F');
                $('#tHumidity').append('Humidity: ',tHumidity,'%'); 
                
            })
            var dayFour = results.slice(27,28)
            dayFour.forEach(function(result) {
                var dateF = moment().add(4, 'days').calendar()
                var tempF = result.main.temp
                var humidityF = result.main.humidity
                var forecastTs = result.weather
                var weather = forecastTs.slice()
    weather.forEach(function(forecastT){
        var dayFourIcon = forecastT.icon
        var dayFourIconUrl = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
        console.log(dayFourIconUrl)
        $('#foreCastF').append('<img id="clouds" src=' + dayFourIconUrl +'>')
                })
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
                var forecastFis = result.weather
                var weather = forecastFis.slice()
    weather.forEach(function(forecastFi){
        var dayFiveIcon = forecastFi.icon
        var dayFiveIconUrl = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
        console.log(dayFiveIconUrl)
        $('#foreCastFi').append('<img id="clouds" src=' + dayFiveIconUrl +'>')
                })
                $('#dateFi').append(dateFi);
                $('#tempFi').append('Temp: ',tempFi, '°F');
                $('#humidityFi').append('Humidity: ',humidityFi,'%'); 
               // console.log(result)
            })
          })
      })
})



    


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
    var forCasts = response.weather
    var weather = forCasts.slice()
    weather.forEach(function(forCast){
        var icon = forCast.icon
        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
        console.log(iconUrl)
        $('#forecast').append('<img id="clouds" src=' + iconUrl +'>')
    })
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
                var fForecasts = result.weather
                var weather = fForecasts.slice()
    weather.forEach(function(fForecast){
        var dayOneIcon = fForecast.icon
        var dayOneIconUrl = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
//console.log(iconUrl)
$('#fForecast').append('<img id="clouds" src=' + dayOneIconUrl +'>')
                })
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
                var sForecasts = result.weather
                var weather = sForecasts.slice()
    weather.forEach(function(sForecast){
        var dayTwoIcon = sForecast.icon
        var dayTwoIconUrl = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
        //console.log(iconUrl)
        $('#sForecast').append('<img id="clouds" src=' + dayTwoIconUrl +'>')
    })
                $('#sDate').append(sDate);
                $('#sTemp').append('Temp: ',sTemp, '°F');
                $('#sHumidity').append('Humidity: ',sHumidity)
            })
            var dayThree = results.slice(20,21)
            dayThree.forEach(function(result) {
                var tDate = moment().add(3, 'days').calendar()
                var tTemp = result.main.temp
                var tHumidity = result.main.humidity
                var tForecasts = result.weather
                var weather = tForecasts.slice()
    weather.forEach(function(tForecast){
        var dayThreeIcon = tForecast.icon
        var dayThreeIconUrl = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
       // console.log(dayThreeIconUrl)
        $('#tForeCast').append('<img id="clouds" src=' + dayThreeIconUrl +'>')
                })
                $('#tDate').append(tDate);
                $('#tTemp').append('Temp: ',tTemp, '°F');
                $('#tHumidity').append('Humidity: ',tHumidity); 
                
            })
            var dayFour = results.slice(27,28)
            dayFour.forEach(function(result) {
                var dateF = moment().add(4, 'days').calendar()
                var tempF = result.main.temp
                var humidityF = result.main.humidity
                var forecastTs = result.weather
                var weather = forecastTs.slice()
    weather.forEach(function(forecastT){
        var dayFourIcon = forecastT.icon
        var dayFourIconUrl = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
        //console.log(dayFourIconUrl)
        $('#foreCastF').append('<img id="clouds" src=' + dayFourIconUrl +'>')
                })
                $('#dateF').append(dateF);
                $('#tempF').append('Temp: ',tempF, '°F');
                $('#humidityF').append('Humidity: ',humidityF, '%'); 
                //console.log(result)
            })
            var dayFive = results.slice(34,35)
            dayFive.forEach(function(result) {
                var dateFi = moment().add(5, 'days').calendar()
                var tempFi = result.main.temp
                var humidityFi = result.main.humidity
                var forecastFis = result.weather
                var weather = forecastFis.slice()
    weather.forEach(function(forecastFi){
        var dayFiveIcon = forecastFi.icon
        var dayFiveIconUrl = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
        //console.log(dayFiveIconUrl)
        $('#foreCastFi').append('<img id="clouds" src=' + dayFiveIconUrl +'>')
                })
                $('#dateFi').append(dateFi);
                $('#tempFi').append('Temp: ',tempFi, '°F');
                $('#humidityFi').append('Humidity: ',humidityFi); 
                //console.log(result)
            })
          })
      })
      
    })
    
  
