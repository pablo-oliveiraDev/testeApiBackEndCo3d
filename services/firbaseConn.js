const firebase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyAc6l-G8cTpWe2Tl0QQ8FekN3D3idCWJGk",
  authDomain: "reservaco3d.firebaseapp.com",
  projectId: "reservaco3d",
  storageBucket: "reservaco3d.appspot.com",
  messagingSenderId: "356964407338",
  appId: "1:356964407338:web:0950f36dd43d537962cb53",
  measurementId: "G-Z30X4PDYT9"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;