const firebase = require('../services/firbaseConn');


const db = firebase.firestore();
const Usuario = db.collection('usuarios');


 module.exports = Usuario;