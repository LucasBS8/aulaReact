import './App.css';
import OutraLista from './OutraLista';

function App() {

    //o react irá reclamar caso não tenha uma key para cada item da lista
const meusItens = ['React', 'Vue', 'Angular', 'Svelte', 'Ember'];

    return (
        // Chama "class" como "className" em react
        <div className="App">
            <h1>Renderização de lista</h1>
            <OutraLista itens={meusItens}/>
        </div>

    );
}

export default App;
