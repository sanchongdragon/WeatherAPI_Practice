function conn(){
	var lat = $('.lat').value;
	var lng = $('.lng').value;
	var cnt = $('')
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://community-open-weather-map.p.rapidapi.com/forecast/daily?lat="+lat+"&lon="+lng+"&cnt="+cnt,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "a69a484665msh60376b172ca5bb0p12c9bejsnb540084eb980",
			"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
		}
	};

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
