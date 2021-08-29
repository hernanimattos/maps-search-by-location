<template>
  <container>
    <div class="home">
      <navigation />
      <news-promotion-header />
      <search />
      <call-to-action v-bind="teste">
        <template #top>
          <img src="../assets/images/logos/logo_nike.svg" alt="" />
        </template>
        <template #description>
          <div class="description">
            <h3 class="title">
              RECEBA AS NOVIDADES DA NIKE
            </h3>
            <p class="text-description">
              Cadastre-se e seja um dos primeiros a saber de todas as novidades
              e ofertas.
            </p>
          </div>
        </template>
      </call-to-action>
      <bottom />
      <!-- <div id="map" ref="map"></div> -->
    </div>
  </container>
</template>

<script>
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import NewsPromotionHeader from '@/components/NewsPromotionHeader';
import Search from '@/components/Search';
import CallToAction from '@/components/CallToAction';
import Bottom from '@/components/Bottom';

export default {
  name: 'Home',
  data: () => ({
    map: null,
    lat: null,
    lng: null,

    teste: {
      description:
        ' Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.',
      bottom: 'Cadastre-se',
    },
  }),
  methods: {
    vai() {
      alert(0);
    },
  },

  // mounted() {
  //   let infoWindow = new window.google.maps.InfoWindow();

  //   if (window && window.google) {
  //     this.map = new window.google.maps.Map(this.$refs["map"], {
  //       // center: {
  //       //   lat: this.lat,
  //       //   lng: this.long,
  //       // },
  //       zoom: 8,
  //     });
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
  components: {
    Container,
    Navigation,
    NewsPromotionHeader,
    Search,
    CallToAction,
    Bottom,
  },
};
</script>
<style>
#map {
  height: 600px;
  background: gray;
}
</style>
