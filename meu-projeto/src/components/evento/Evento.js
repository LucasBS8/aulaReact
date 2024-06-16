import Button from "./Button";

function Evento(){
function MeuEvento(){
    console.log("Opa! fui ativado")
}

    return(
        <div>
            <p>Clique para ativar um evento:</p>
            <Button text="Primeiro evento" />
            <button onClick={MeuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;