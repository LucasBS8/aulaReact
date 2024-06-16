import { useState } from 'react';
import SeuNome from './SeuNome';
import Saudacao from './Saudacao';
import './App.css';
function App() {
    const [nome, setNome] = useState();

    return (
        // Chama "class" como "className" em react
        <div className="App">
            <h1>State Lift</h1>
            <SeuNome setNome={setNome}/>
            <Saudacao nome={nome}/>
        </div>

    );
}

export default App;
