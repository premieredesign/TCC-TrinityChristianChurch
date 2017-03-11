
   function myMap() {
     var uluru = {
       lat: 42.07959,
       lng: -83.246449
     };
     var map = new google.maps.Map(document.getElementById('map'), {
       center: uluru,
       zoom: 18,
       mapTypeId: 'satellite'
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
     }; // end funcnion myMap
  