function display() {
	$.ajax({
      	cache: false,
        dataType: "json",
        crossDomain: true,
		url: "https://api.mangadex.org/at-home/server/cb3033c5-b6d1-4d6f-a894-2deb2ddca8d5",
		type:"GET",
		headers: {
         	"Access-Control-Allow-Origin":"*"
      	},
		success: function(result) {
			console.log(result)
		},
		error: function(error) {
			console.log(`Error ${error}`)
		}
	})
}

