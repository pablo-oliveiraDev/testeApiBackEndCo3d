const firebase = require('firebase');

const db = firebase.firestore();
const Livro = db.collection('livros');
module.exports = Livro;