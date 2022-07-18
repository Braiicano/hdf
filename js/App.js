function iniciarMap(){
    var coord = {lat:-34.7749761 ,lng: -58.6197844};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
