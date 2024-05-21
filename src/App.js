import { useState } from "react";

function App(){

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [user, setUser] = useState({})



  function randomRegister(e){
    e.preventDefault()
    alert('Registrado com sucesso')
    
    setUser({
      nome:nome,
      email: email,
      senha: senha,
    })

  }

  return(
  <div>
    <h2>Cadastrando usuario</h2>
    <form onSubmit={randomRegister}>
      <label>Nome:</label><br/>
      <input placeholder="Digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}></input><br/>
      <label>Email:</label><br/>
      <input placeholder="Digite seu email" value={email} onChange={(e)=> setEmail(e.target.value)}></input><br/>
      <label>Senha:</label><br/>
      <input placeholder="Digite sua senha" value={senha} onChange={(e)=> setSenha(e.target.value)}></input><br/>
      <button type="submit">Registrar</button>
    </form><br/>
    <div>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Email: {user.email}</span><br/>
      <span>Senha:{user.senha}</span><br/>
    </div>
  </div>
  );
}


export default App;

