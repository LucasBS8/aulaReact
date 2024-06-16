import Button from "./Button";

function Evento(){
function MeuEvento(){
    console.log("Ativando primeiro evento")
}

function SegundoEvento(){
    console.log("Ativando segundo evento")
}

    return(
        <div>
            <p>Clique para ativar um evento:</p>
            <Button event={MeuEvento} text="Primeiro evento" />
            <Button event={SegundoEvento} text="Segundo evento" />

        </div>
    )
}

export default Evento;