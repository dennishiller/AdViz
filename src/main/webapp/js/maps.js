function initMap() {
    var berlin = {lat: 52.520, lng: 13.404};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: berlin});
    var marker = new google.maps.Marker({position: berlin, map: map});

}