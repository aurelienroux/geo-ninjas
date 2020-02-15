<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'GMap',
  data() {
    return {
      lat: 53,
      lng: -2
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
        minZoom: 3,
        streetViewControl: false
      })
    }
  },
  mounted() {
    if (document.getElementById('map')) {
      let user = firebase.auth().currentUser

      // get user location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            this.lat = pos.coords.latitude
            this.lng = pos.coords.longitude

            // find the user record and then update records
            db.collection('users')
              .where('user_id', '==', user.uid)
              .get()
              .then(snapshot => {
                snapshot.forEach(doc => {
                  db.collection('users')
                    .doc(doc.id)
                    .update({
                      geolocation: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                      }
                    })
                })
              })
              .then(() => {
                this.renderMap()
              })

            this.renderMap()
          },
          err => {
            console.log(err)
            this.renderMap
          },
          {
            maximumAge: 60000,
            timeout: 3000
          }
        )
      } else {
        // position centre by default values
        this.renderMap
      }
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
