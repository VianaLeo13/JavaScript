const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      Nome: <input type="text" name="username" placeholder="" required>
      <button type="submit">Submit</button>
    </form>`);
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send(`Oque vc me enviou foi: ${req.body.username}`);
});

app.get('/testes/:id_Usuarios', (req, res) => {

  console.log(req.params);
  res.send(req.params.id_Usuarios);
});

app.get('/testes', (req, res) => {
  
  console.log(req.query);
  console.log(req.params);
  res.send('Sem ID');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

