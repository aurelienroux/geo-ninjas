<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'GMap',
  data() {
    return {
      lat: 45.50884,
      lng: -73.58781
    }
  },
  methods: {
    renderMap() {
      /*eslint-disable */
      const map = new google.maps.Map(document.getElementById('map'), {
        /*eslint-enable */
        center: { lat: this.lat, lng: this.lng },
        zoom: 10,
        maxZoom: 15,
        minZoom: 3
        // streetViewControl: false
      })
    }
  },
  mounted() {
    if (document.getElementById('map')) {
      this.renderMap()
      console.log(firebase.auth().currentUser)
    }
  }
}
</script>

<style>
.google-map {
  background: #fff;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
