export const initMap = async ({ currentCoords, mapsResult, $refs }, zoom) => {
  const coords = { ...JSON.parse(JSON.stringify(currentCoords)) };

  if (window && window.google) {
    const map = await drawMapRefs(coords, zoom, $refs);

    await infoWindow(coords, map, mapsResult);
  }
};

export const drawMapRefs = async (coords, zoom, refs) => {
  const map = new window.google.maps.Map(refs.map, {
    center: new window.google.maps.LatLng(coords.lat, coords.lng),
    zoom,
  });

  return await map;
};

export const infoWindow = async (coords, map, results) => {
  const infoWindow = new window.google.maps.InfoWindow();
  infoWindow.setPosition(coords);
  infoWindow.setContent('Você está aqui');
  infoWindow.open(map);

  results.forEach((place) => {
    const coords = { ...JSON.parse(JSON.stringify(place.geometry.location)) };

    new window.google.maps.Marker({
      position: { ...coords },
      icon: require('../assets/images/icons/icon_pin_mapa.svg'),
      map: map,
    });
  });
  // return await map.setCenter();
};
