function Saudacao({nome}) {

function gerarSaudacao(algumNome) {
    // if (algumNome) {
    //     return `Olá ${algumNome}, tudo bem?`;
    // }
    return `Olá ${algumNome}, tudo bem?`;
}

    return (
        <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao;