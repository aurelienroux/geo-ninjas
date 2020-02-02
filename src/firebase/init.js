import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyApiOkmYCnm4FvfFb4O_z2olUP2NSJL2p4',
  authDomain: 'geo-ninjas-58398.firebaseapp.com',
  databaseURL: 'https://geo-ninjas-58398.firebaseio.com',
  projectId: 'geo-ninjas-58398',
  storageBucket: 'geo-ninjas-58398.appspot.com',
  messagingSenderId: '990284691693',
  appId: '1:990284691693:web:834eaf83f3ecf296c2f4e4'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
