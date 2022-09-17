$(document).ready(function() {
    var app = new Mapp({
      element: "#map",
      presets: {
        latlng: {
          lat: 35.73249,
          lng: 51.42268
        },
        zoom: 10
      },
    apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk2NTA5MWRmNjBiMTdlODlkNmNhMDE4YTg3YmE3MTJiNmQzNjM2YmY1NDcwNmQ5YWMxNWM0NDhhNzg1Y2U3ZDQ2ZDE4ODY1ZGE2MWUyNTNjIn0.eyJhdWQiOiIxOTQ5MiIsImp0aSI6Ijk2NTA5MWRmNjBiMTdlODlkNmNhMDE4YTg3YmE3MTJiNmQzNjM2YmY1NDcwNmQ5YWMxNWM0NDhhNzg1Y2U3ZDQ2ZDE4ODY1ZGE2MWUyNTNjIiwiaWF0IjoxNjYzNDI1NTgxLCJuYmYiOjE2NjM0MjU1ODEsImV4cCI6MTY2NjEwNzU4MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.XZYmYTsCNiZGaGisdx3rMVe4DnHNsFomtX0dU9WepTQzDnYxAYW9ApMSGDaacCOZoA2GzKlu6sDtL3XRbDQjIcsb1Nc_gqBehUfk86IcaaF0J57szS_gDWOJ-DfeIaaDATovQU3QVBXWF7QA-sDjIWQGo2AScTwEndhZ2hBcXrMfU1Gw3JZ2onm1FuFG0HIIU5LBXD9SKNR6PRb8D87ZB7NfihVu-y8wDpdxukG5TOBnHMu1vW6Xv2Sjzxhy-3r2jDqBt95xzfMOQ9W0XTrDEM9RQALN21rW-pZLjjXa9BPJ-4jzaMcyRw_i9jqprLrTszPcgdlBVvYq7zfPkZizqw'
    });

    app.addVectorLayers();
    app.addFullscreen();
    app.addGeolocation();
    // Add in a crosshair for the map
    var crosshairIcon = L.icon({
      iconUrl: 'https://cloud.son.ir/index.php/s/qVUHj7HJSr1A7MK/download',
      iconSize:     [20, 20], // size of the icon
      iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    });
    var crosshairMarker = new L.marker(app.map.getCenter(), {icon: crosshairIcon, clickable:false});
    crosshairMarker.addTo(app.map);

    // Move the crosshair to the center of the map when the user pans
    app.map.on('move', function(e) {
      crosshairMarker.setLatLng(app.map.getCenter());

    });

    crosshairMarker.on('move', function(event){
      console.log(event.latlng)
    });
  });
