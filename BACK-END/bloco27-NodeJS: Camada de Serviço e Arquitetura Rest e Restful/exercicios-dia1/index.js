const express = require('express');
const model = require('./models/model')

const app = express();

const PORT = 3000;

// POST /user - Cria um usuário no banco com os seguintes dados:
// id : Id única gerada automaticamente pelo banco;
// first_name : Nome do usuário (string obrigatória);
// last_name : Sobrenome do usuário (string obrigatória);
// email : Email do usuário (string obrigatória);
// password : Senha do usuário (string com pelos menos 6 caracteres obrigatória);
// O endpoint deve retornar um JSON com a mensagem Usuário criado com sucesso , juntamente com o status 201 ;
// Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um objeto com a mensagem Dados inválidos juntamente com o status 200 .

const checkUser = (firstName, lastName, email, password) => {
  if(!firstName || !lastName || !email || !password){
    return false;
  }
  if(password.length < 6){
    return false;
  }
  return true;
}

app.post('/user', async(req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userChecked = checkUser(firstName, lastName, email, password);
  if(!userChecked){
    return res.status(200).json({ message: 'Usuário não encontrado' });
  }
  const user = await model.createUser(firstName, lastName, email, password);
  return res.status(201).json({ message: 'Usuário criado com sucesso' });
});

// GET /user/:id - Retorna o objeto do usuário cujo id seja igual ao parâmetro id informado na URL. Além disso o endpoint deve retornar também o status 200 .
// Caso não exista um usuário com id informado o endpoint deve retornar um JSON com mensagem Usuário não encontrado , juntamente com o status 404 .

app.get('/user/:id', async(req, res) => {
  const { id } = req.params;
  const user = await model.getUserById(id);
  if(!user){
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
  return res.status(200).json(user);
});

// GET /user - Retorna um array com todos os usuários cadastrados no banco de dados, sendo cada usuário um objeto diferente. Além disso o endpoint deve retornar também o status 200 .

app.get('/user', async(_req, res)=>{
  const allUsers = await model.getAllUsers();
  return res.status(200).json(allUsers);
});


// PUT /user/:id - Edita informações do usuário cujo id seja igual ao parâmetro id informado na URL.
// O endpoint deve retornar um JSON com a mensagem Usuário editado com sucesso , juntamente com o status 200 ;
// Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um objeto com a mensagem Dados inválidos juntamente com o status 200 .

app.put('/user/:id', async(req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const userChecked = checkUser(firstName, lastName, email, password);
  if(!userChecked){
    return res.status(200).json({ message: 'Dados inválidos' });
  }
  await model.editUserById(id, firstName, lastName, email, password);
  return res.status(200).json({ message: 'Usuário editado com sucesso' });
});

// DELETE /user/:id - Deleta o usuário cujo id seja igual ao parâmetro id informado na URL.
app.delete('/user/:id', async(req, res) => {
  const { id } = req.params;
  await model.deleteUserById(id);
  return res.status(200).json({ message: 'Usuário deletado' });
});

app.listen(PORT, ()=>{`rodando na porta ${PORT}`});
