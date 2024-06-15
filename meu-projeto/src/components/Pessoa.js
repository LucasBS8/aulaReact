//Props pode receber vários valores dependendo do nome
//mas o recurso strucuturing do javaScript permite que você receba já com o nome definido
function Pessoa({nome, idade, profissao, foto}) {
    return <div>

        <img src={foto} alt={nome} />

        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
    </div>
}
export default Pessoa