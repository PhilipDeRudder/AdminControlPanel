import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBxzxCtlYuTuvZ08VPXwBb_hGPDivBENaM",
    authDomain: "restaurantadminpanel.firebaseapp.com",
    databaseURL: "https://restaurantadminpanel.firebaseio.com",
    projectId: "restaurantadminpanel",
    storageBucket: "restaurantadminpanel.appspot.com",
    messagingSenderId: "462951681066",
    appId: "1:462951681066:web:a852cc724a011b56920753",
    measurementId: "G-46ZYRZ2GLY"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;