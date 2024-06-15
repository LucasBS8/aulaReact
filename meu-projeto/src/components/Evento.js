function Evento(){
function MeuEvento(){
    console.log("Opa! fui ativado")
}

    return(
        <div>
            <p>Clique para ativar um evento:</p>
            <button onClick={MeuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;