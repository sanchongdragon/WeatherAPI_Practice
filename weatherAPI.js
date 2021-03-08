function conn(){
	// console.log(cityId);
	var lat = $('#lat').val();
	var lng = $('#lng').val();
	$('#content').text("");
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://community-open-weather-map.p.rapidapi.com/forecast/daily?lat="+lat+"&lon="+lng+"&cnt=7",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "a69a484665msh60376b172ca5bb0p12c9bejsnb540084eb980",
			"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
		},
		"dataType":"json"
	};


    $.ajax(settings).done(function (response) {
		console.log(response);
		$('#content').append('<caption>OpenWeatherAPI_Practice</caption>');
        var data = response;
		// data[]
		$('#content').append('<tr><td>地名</td><td>日期</td><td>最高溫</td><td>最低溫</td><td>天氣狀況</td></tr>');
		data.list.forEach(function(element,idx){
			// 取得dt (時戳) 屬性
			let timestamp = element.dt;
			// 宣告date物件dt，代入時戳*1000
			var dt = new Date(timestamp * 1000);
			// 將dt轉換成月日，丟進dtpd內
			$('#content').append('<tr>');
			if(data.city.name == "")
				$('#content').append('<td>'+'此座標無城市'+'</td>');
			else
				$('#content').append('<td>'+ data.city.name +'</td>');
			$('#content').append('<td>'+(dt.getMonth()+1) + '月'+ dt.getDate() +'日</td>');
			$('#content').append('<td>'+Math.round(element.temp.max-273.15)+'℃</td>');
			$('#content').append('<td>'+Math.round(element.temp.min-273.15)+'℃</td>');
			$('#content').append('<td>'+element.weather[0].main+'</td>');
			$('#content').append('</tr>');
		});

		// $('#content').append('</table>');
    	});
}
