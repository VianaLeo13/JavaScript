exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      Nome: <input type="text" name="username" placeholder="" required>
      <button type="submit">Submit</button>
    </form>`);
};

exports.trataPost = (req, res) => {
  res.send('Sou o metodo POST');
};



