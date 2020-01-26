var date = moment().format('l')
var time = moment().format('LTS')
$('.date').append(date)
var search = 'Sanford'
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&appid=421493e1a9d6d7ce1b656ee17274f671";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      var city = response.name
      var temp = response.main.temp
      var humidity = response.main.humidity
      
      $('button').click(function(){
    
        $('.city').append(city)
        $('.temp').append('Temperture: ', temp)
        $('#humidity').append('Humidity: ', humidity)
      console.log(response)
          
      })
      
    });
    
  
