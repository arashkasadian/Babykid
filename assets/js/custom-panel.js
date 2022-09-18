$(document).ready(function () {
  var app = new Mapp({
    element: "#map",
    presets: {
      latlng: {
        //موقعیتی که نقشه از آنجا شروع میشود , میتوان آنرا با موقعیتی که کاربر از قبل ثبت کرده جایگزین کرد
        lat: 35.73249,
        lng: 51.42268
      },
      zoom: 10
    },
    // لطفا در سایت map.ir ثبت نام کنید
    //و برای پروژه کلید را دریافت کنید
    apiKey: ''
  });

  app.addVectorLayers();
  app.addFullscreen();
  app.addGeolocation();
  // Add in a crosshair for the map
  var crosshairIcon = L.icon({
    iconUrl: '../assets/images/loc-tag.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
  });
  var crosshairMarker = new L.marker(app.map.getCenter(), { icon: crosshairIcon, clickable: false });
  crosshairMarker.addTo(app.map);

  // Move the crosshair to the center of the map when the user pans
  app.map.on('move', function (e) {
    crosshairMarker.setLatLng(app.map.getCenter());
  });
  crosshairMarker.on('click', function (e) {
    app.findReverseGeocode({
      state: {
        latlng: {
          lat: crosshairMarker._latlng.lat,
          lng: crosshairMarker._latlng.lng,
        },
      },
      after: function (data) {
        document.getElementById('address').value=data.address;
        document.getElementById('lat').value=crosshairMarker._latlng.lat;
        document.getElementById('lng').value=crosshairMarker._latlng.lng;
      }
    });
  });


});
