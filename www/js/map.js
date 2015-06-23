// JavaScript Document
var onSuccess = function(position) {
	var myLat = position.coords.latitude;
    	            var myLong = position.coords.longitude;

                //MAP
                var mapOptions = {
                    center: new google.maps.LatLng(myLat, myLong),
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

            var map = new google.maps.Map(document.getElementById("map_canvas"),
                                              mapOptions);

                var marker = new google.maps.Marker({
                                                    position: new google.maps.LatLng(myLat, myLong),
                                                    map: map,
                                                    title:"Hello World!"
                                                    });

            };

            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);