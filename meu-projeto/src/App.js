import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'
import Evento from './components/evento/Evento'
import Form from './components/Form'

function App() {
    const nome = 'Lucas';
    const newNome = nome.toLocaleUpperCase();
    const url = 'https://via.placeholder.com/150';

    function sum(a, b) {
        return a + b;
    }

    return (
        // Chama "class" como "className" em react
        <div className="App">
            <h2>
                Alterando o JSX
            </h2>
            <p>Olá, {newNome}</p>
            <p>Soma: {sum(2, 5)}</p>
            <img src={url} alt="Minha imagem" />
            <HelloWorld />

            <SayMyName nome="Matheus" />
            <SayMyName nome="João" />
            <SayMyName nome={nome} />
            <Pessoa nome="Lucas" idade="19" profissao="Programador" foto="https://via.placeholder.com/150" />
            <List />

            <div>
                <Evento />
            </div>

            <div>
                <Form />
            </div>

        </div>


    );
}

export default App;
