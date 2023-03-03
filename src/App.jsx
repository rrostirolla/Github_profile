import { useState } from "react"
import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
      <div className="procuraUsuario">
        <input className="procuraPerfil" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder='Digite o seu usário do Github'/>
      </div>
      {nomeUsuario.length > 4 && (
        <> 
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
