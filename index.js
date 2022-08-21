const express = require('express');
const cors = require('cors');
const Usuario = require('./dataBases/usuarios');
const Livro = require('./dataBases/livros');




const app = express();
app.use(express.json());
app.use(cors());

app.post('/user', async (req, res) => {

    const data = req.body;
    await Usuario.add(data);
    try {
        res.status(201).send({ msg: "Usuario cadastrado com sucesso!" });
    } catch (error) {
        res.send({ msg: "Erro ao cadastrar usuario!" })
    }


});

app.get('/user', async (req, res) => {

    const snapshot = await Usuario.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    try {
        res.send(usuarios);
    } catch (error) {
        res.send(error);
    }

});


app.get('/user/:id', async (req, res) => {

    const id = req.params.id;
    const snapshot = await Usuario.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const usuario = usuarios.filter((u) => {
        return u.id == id;

    });
    res.send(usuario);
});
app.put('/user/:id', async (req, res) => {

    const id = req.params.id;
    await Usuario.doc(id).update(req.body);

    res.send({ msg: "Usuario atualizado com sucesso!" });
});

app.delete('/user/:id', async (req, res) => {

    const id = req.params.id;
    await Usuario.doc(id).delete();

    res.send({ msg: "Usuário deletado com sucesso!" })
});

//-----------------------------livros--------------------------------

app.post('/livros', async (req, res) => {

    const data = req.body;
    await Livro.add(data);
    try {
        res.status(201).send('Livro cadastrado com sucesso!');
    } catch (error) {
        res.send('ops!ocorreu um erro inexperado!');
    }
});


app.get('/livros', async (req, res) => {

    const snap = await Livro.get();
    const livros = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    try {
        res.send(livros);
    } catch (error) {
        res.send(error);
    }

});

app.get('/livros/:id', async (req, res) => {

    const id = req.params.id;
    const snapshot = await Livro.get();
    const livros = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const livro = livros.filter((u) => {
        return u.id == id;

    });
    res.send(livro);
});

app.put('/livros/:id', async (req, res) => {

    const id = req.params.id;
    await Livro.doc(id).update(req.body);

    res.send({ msg: "Livro atualizado com sucesso!" });
});

app.delete('/livros/:id', async (req, res) => {

    const id = req.params.id;
    await Livro.doc(id).delete();
    res.send({ msg: "Livro deletado com sucesso!" });


});

app.listen(5050, () => {
    console.log('Voce esta conectado em http://localhost:5050')
});