<template>
  <div class="map-continer" id="map" ref="map"></div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('maps');

export default {
  name: 'map-container',
  computed: {
    ...mapState(['currentCoords']),
  },

  mounted() {
    if (window && window.google) {
      let infoWindow = new window.google.maps.InfoWindow();

      this.map = new window.google.maps.Map(this.$refs['map'], {
        center: {
          ...this.currentCoords,
        },
        zoom: 12,
      });

      const pos = {
        ...this.currentCoords,
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Você está aqui');
      infoWindow.open(this.map);
      this.map.setCenter(pos);
    }

    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           this.lat = position.coords.latitude;
    //           this.lng = position.coords.longitude;
    //           const pos = {
    //             lat: this.lat,
    //             lng: this.lng,
    //           };
    //           infoWindow.setPosition(pos);
    //           infoWindow.setContent("Você está aqui");
    //           infoWindow.open(this.map);
    //           this.map.setCenter(pos);
    //         },
    //         () => {
    //           // handleLocationError(true, infoWindow, this.map.getCenter());
    //         }
    //       );
    //     }
    //     var pyrmont = new window.google.maps.LatLng(this.lat, this.lng);
    //     const service = new window.google.maps.places.PlacesService(this.map);
    //     var request = {
    //       location: pyrmont,
    //       radius: "2500",
    //       query: "centauro",
    //     };
    //     let markers = [];
    //     service.textSearch(request, (results, status) => {
    //       console.log(results, "lllll", status);
    //       markers.forEach((marker) => {
    //         marker.setMap(null);
    //       });
    //       markers = [];
    //       const bounds = new window.google.maps.LatLngBounds();
    //       results.forEach((place) => {
    //         if (!place.geometry || !place.geometry.location) {
    //           console.log("Returned place contains no geometry");
    //           return;
    //         }
    //         const icon = {
    //           url: place.icon,
    //           size: new window.google.maps.Size(71, 71),
    //           origin: new window.google.maps.Point(0, 0),
    //           anchor: new window.google.maps.Point(17, 34),
    //           scaledSize: new window.google.maps.Size(25, 25),
    //         };
    //         //     // Create a marker for each place.
    //         markers.push(
    //           new window.google.maps.Marker({
    //             map: this.map,
    //             icon,
    //             title: place.name,
    //             position: place.geometry.location,
    //           })
    //         );
    //         if (place.geometry.viewport) {
    //           // Only geocodes have viewport.
    //           bounds.union(place.geometry.viewport);
    //         } else {
    //           bounds.extend(place.geometry.location);
    //         }
    //       });
    //     });
    // const input = document.getElementById("search");
    // // const searchBox = new window.google.maps.places.SearchBox("centauro");
    // // const input = document.getElementById("pac-input");
    // const searchBox = new window.google.maps.places.SearchBox(input);
    // this.map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
    //   input
    // );
    // // Bias the SearchBox results towards current map's viewport.
    // this.map.addListener("bounds_changed", () => {
    //   searchBox.setBounds(this.map.getBounds());
    // });
    // // Listen for the event fired when the user selects a prediction and retrieve
    // // more details for that place.
    // searchBox.addListener("places_changed", () => {
    // const places = searchBox.getPlaces();
    //   console.log(places);
    //   if (places.length == 0) {
    //     return;
    //   }
    //   // Clear out the old markers.
    // For each place, get the icon, name and location.
    //   this.map.fitBounds(bounds);
    // });
    // console.log(searchBox, "llll");
    // this.search = new window.google.maps.
    // }
    // },
  },
};
</script>

<style></style>
